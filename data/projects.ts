type Locale = 'en' | 'pt'
export type Project = { name: string; description: string; stack: string[]; outcome: string; href?: string; private?: boolean; website?: boolean }

export const projects: Record<Locale, Project[]> = {
  en: [{ name: 'Teltonika Go', description: 'A lightweight Go library for decoding and working with binary data from Teltonika GPS devices.', stack: ['Go', 'Binary protocols', 'IoT'], outcome: 'Built around correctness, extensibility, documentation, and testability.', href: 'https://github.com/danieljvsa/teltonika-go' }, { name: 'Backend systems at CEiiA', description: 'Backend engineering in a multidisciplinary, production-focused environment.', stack: ['APIs', 'Data systems', 'Integrations'], outcome: 'Contribute to reliable services, maintainable code, and cross-functional delivery.', private: true }],
  pt: [{ name: 'Teltonika Go', description: 'Biblioteca Go leve para descodificar e trabalhar com dados binários de dispositivos GPS Teltonika.', stack: ['Go', 'Protocolos binários', 'IoT'], outcome: 'Desenvolvida com foco em correção, extensibilidade, documentação e testes.', href: 'https://github.com/danieljvsa/teltonika-go' }, { name: 'Sistemas backend na CEiiA', description: 'Engenharia backend num contexto multidisciplinar e orientado para produção.', stack: ['APIs', 'Sistemas de dados', 'Integrações'], outcome: 'Contributo para serviços fiáveis, código sustentável e entrega colaborativa.', private: true }]
}
projects.en.unshift(
  { name: 'roadgraph-router', description: 'Browser-safe routing over pre-built road graphs, using A* to calculate routes locally.', stack: ['TypeScript', 'A*', 'Routing'], outcome: 'Includes a streaming OpenStreetMap compiler for building regional road graphs.', href: 'https://github.com/danieljvsa/roadgraph-router' },
  { name: 'Energy&Fuel', description: 'An interactive map of fuel stations and EV charging points across Portugal.', stack: ['Next.js', 'TypeScript', 'Maps'], outcome: 'Explore published fuel prices and calculate routes locally.', href: 'https://energy-fuel.vercel.app', website: true },
  { name: 'Invicta Móvel', description: 'An interactive transit map for the Porto metropolitan area.', stack: ['Transit', 'Maps', 'Web'], outcome: 'Explore public transport on a map.', href: 'https://invicta-movel.vercel.app', website: true }
)
projects.pt.unshift(
  { name: 'roadgraph-router', description: 'Biblioteca de rotas para o navegador que usa A* e grafos rodoviários pré-construídos.', stack: ['TypeScript', 'A*', 'Rotas'], outcome: 'Inclui um compilador OpenStreetMap em streaming para criar grafos regionais.', href: 'https://github.com/danieljvsa/roadgraph-router' },
  { name: 'Energy&Fuel', description: 'Mapa interativo de postos de combustível e pontos de carregamento elétrico em Portugal.', stack: ['Next.js', 'TypeScript', 'Mapas'], outcome: 'Consulta preços de combustível publicados e calcula rotas localmente.', href: 'https://energy-fuel.vercel.app', website: true },
  { name: 'Invicta Móvel', description: 'Mapa interativo de transportes da Área Metropolitana do Porto.', stack: ['Transportes', 'Mapas', 'Web'], outcome: 'Explora os transportes públicos num mapa.', href: 'https://invicta-movel.vercel.app', website: true }
)
