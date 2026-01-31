import { computed } from 'vue'
import { categories } from '../data/curriculum'
import { useProgress } from './useProgress'

export function useKnowledgeGraph() {
    const { isChapterFullyComplete } = useProgress()

    // Computed: Auto-generate graph data from curriculum
    const graphData = computed(() => {
        const nodes = []
        const links = []

        // 0. ROOT NODE - Python 学习 (Central hub)
        const rootId = 'python-learning-root'
        nodes.push({
            id: rootId,
            label: 'Python 学习',
            group: 'root',
            level: 0,
            mastery: 1
        })

        categories.forEach(category => {
            // 1. Category Node
            nodes.push({
                id: category.id,
                label: category.title,
                group: 'category',
                level: 1,
                mastery: 1,
                parent: rootId
            })

            // Link Root -> Category
            links.push({
                source: rootId,
                target: category.id,
                type: 'hierarchy'
            })

            category.chapters.forEach(chapter => {
                // 2. Chapter Node
                const isComplete = isChapterFullyComplete(chapter.id)

                nodes.push({
                    id: chapter.id,
                    label: chapter.title.split('：')[1] || chapter.title, // Simplified label
                    group: 'chapter',
                    level: 2,
                    mastery: isComplete ? 1 : 0.3,
                    parent: category.id
                })

                // Link Category -> Chapter
                links.push({
                    source: category.id,
                    target: chapter.id,
                    type: 'hierarchy'
                })

                // 3. Concept Nodes (Satellites)
                if (chapter.concepts) {
                    chapter.concepts.forEach(concept => {
                        nodes.push({
                            id: concept.id,
                            label: concept.label,
                            group: 'concept',
                            level: 3,
                            mastery: isComplete ? 1 : 0.1, // Dim if chapter not complete
                            desc: concept.desc,
                            refJs: concept.refJs,
                            parent: chapter.id
                        })

                        // Link Chapter -> Concept
                        links.push({
                            source: chapter.id,
                            target: concept.id,
                            type: 'hierarchy'
                        })
                    })
                }
            })
        })

        return { nodes, links }
    })

    return {
        graphData
    }
}
