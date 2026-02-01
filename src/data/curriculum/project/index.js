const modules = import.meta.glob('../project-chapters/*/index.js', { eager: true })

function extractOrder(path) {
  const m = path.match(/project-chapters\/(\d+)[^/]*\/index\.js$/)
  return m ? parseInt(m[1], 10) : 0
}

const dynamicChapters = Object.entries(modules)
  .map(([p, mod]) => ({ order: extractOrder(p), chapter: (mod.default || mod.chapter || mod) }))
  .sort((a, b) => a.order - b.order)
  .map(x => x.chapter)

export const project = {
  id: 'project',
  title: '实战篇',
  chapters: dynamicChapters
}
