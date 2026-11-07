/* eslint-disable @typescript-eslint/no-require-imports */
const { spawn } = require('node:child_process')
const { createServer } = require('node:net')
const { existsSync } = require('node:fs')
const assert = require('node:assert/strict')
const { chromium } = require('playwright-core')

async function freePort() {
  const listener = createServer()
  await new Promise((resolve, reject) => listener.once('error', reject).listen(0, '127.0.0.1', resolve))
  const port = listener.address().port
  await new Promise(resolve => listener.close(resolve))
  return port
}

async function run() {
  const port = await freePort()
  const base = `http://127.0.0.1:${port}`
  const server = spawn(process.execPath, [require.resolve('next/dist/bin/next'), 'start', '-H', '127.0.0.1', '-p', String(port)], { stdio: ['ignore', 'pipe', 'pipe'] })
  let output = ''
  server.stdout.on('data', data => { output += data })
  server.stderr.on('data', data => { output += data })
  let browser
  try {
    for (let attempt = 0; attempt < 100 && !/Ready in/.test(output); attempt++) {
      if (server.exitCode !== null) throw new Error(`Server exited: ${output}`)
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    assert.match(output, /Ready in/, `Server did not start: ${output}`)
    const chrome = process.env.CHROME_PATH || ['C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', '/usr/bin/google-chrome', '/usr/bin/chromium'].find(existsSync)
    assert.ok(chrome, 'Set CHROME_PATH to a Chrome or Chromium executable')
    browser = await chromium.launch({ executablePath: chrome, headless: true })
    const page = await browser.newPage({ viewport: { width: 320, height: 800 }, reducedMotion: 'reduce' })
    for (const [path, language] of [['/', 'en'], ['/pt', 'pt']]) {
      const response = await page.goto(base + path)
      assert.equal(response.status(), 200)
      assert.equal(await page.locator('html').getAttribute('lang'), language)
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `${path}: horizontal overflow`)
      await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js') })
      const results = await page.evaluate(async () => await window.axe.run())
      assert.deepEqual(results.violations.map(({ id, nodes }) => ({ id, targets: nodes.map(node => node.target) })), [], `${path}: axe violations`)
    }
    await page.goto(base + '/')
    await page.keyboard.press('Tab')
    assert.match(await page.locator(':focus').innerText(), /Skip to content/)
    await page.getByRole('link', { name: 'PT — Switch language to Portuguese' }).click()
    await page.waitForURL('**/pt')
    await page.waitForFunction(() => document.documentElement.lang === 'pt')
    for (const href of ['https://energy-fuel.vercel.app', 'https://invicta-movel.vercel.app', 'https://github.com/danieljvsa/roadgraph-router', '/cv/danieljvsa_cv.pdf']) assert.equal(await page.locator(`a[href="${href}"]`).count(), 1, `Missing ${href}`)
    assert.equal((await page.request.get(base + '/cv/danieljvsa_cv.pdf')).status(), 200)
    console.log('Browser smoke and accessibility checks passed')
  } finally {
    if (browser) await browser.close()
    server.kill()
  }
}
run().catch(error => { console.error(error); process.exitCode = 1 })
