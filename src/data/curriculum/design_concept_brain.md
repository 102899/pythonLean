# Feature Design: "The Python Brain" (Python 知识宫殿)

## 1. 核心愿景 (Core Vision)
构建一个基于 **Canvas 的无限画布知识网络** (Infinite Knowledge Network)。
摒弃传统的线性目录结构，用“上帝视角”俯瞰整个 Python 知识体系。让用户感知到知识点之间的**拓扑结构**，形成结构化的长期记忆。

## 2. 视觉形态：结构化知识巨网 (The Structural Web)

### 核心隐喻
*   **无限画布 (Infinite Canvas)**：类似 Miro/Heptabase/Obsidian 的图谱视图。用户可以自由缩放 (Zoom)、平移 (Pan)。
*   **层级聚类**：
    *   **核心恒星 (Category)**：最大的节点 (基础、核心、进阶、实战)。
    *   **行星 (Chapter)**：围绕恒星的二级节点。
    *   **卫星 (Course Point)**：具体的知识点 (如 `List`, `Dict`, `Lambda`)，最细颗粒度。

### 连线关系 (Topology)
*   **结构线 (Hierarchy)**：定义知识的归属 (e.g., `List` 属于 `Data Structures`)。
*   **关联线 (Association)**：定义知识的迁移 (e.g., `Python List` <--> `JS Array`)。这是本应用的核心价值——帮助前端开发者建立**跨语言映射**。

---

## 3. 交互设计 (Interaction Design)

### A. 宏观：认知结构 (Macro View)
*   **全景概览**：进入时，展示完整的 Python 技能树结构。即使是未解锁的章节，也显示灰色轮廓。
*   **价值**：用户不再是“盲人摸象”，而是清楚知道自己处于知识地图的坐标位置 (You are here)。

### B. 微观：节点交互 (Micro Interaction)
当用户点击某个具体的知识“卫星”节点时：

1.  **侧边栏详情 (Detail Panel)**：
    *   **互不干扰**：保持图谱的沉浸感，详情内容在右侧（或悬浮）展示。
    *   **知识卡片**：
        *   **Definition**: 简明定义。
        *   **Analogy**: "Think of it like JS..." (前端类比)。
        *   **Snippet**: 可运行的最小代码片段。
    *   **状态交互**：
        *   [标记为熟悉]：点亮节点，增加熟练度。
        *   [查看关联]：高亮显示所有相连的 JS 概念节点。

---

## 4. 技术方案 (Technical Stack)

为了实现高性能的万级节点渲染与丝滑交互，建议采用：

*   **渲染引擎**：**HTML5 Canvas** (性能最佳) 或 **SVG** (基于 D3.js，交互开发成本低)。
    *   推荐库：`d3-force` (力导向图算法) 用作布局引擎 + `Canvas API` 负责绘制。
*   **数据结构**：

```javascript
interface Node {
  id: string;
  label: string; // "List"
  level: 'category' | 'chapter' | 'concept'; // 节点大小/颜色依据
  mastery: number; // 0-1, 决定透明度/亮度
  refJs?: string; // "Array" (关联的 JS 概念)
}

interface Link {
  source: string;
  target: string;
  type: 'structure' | 'analogy'; // 结构线实线，类比线虚线
}
```

---

## 5. 预期体验流
1.  **概览**：用户打开“大脑”，看到一张巨大的发光网络，像星空一样。
2.  **定位**：通过鼠标滚轮放大，聚焦到 `Core Syntax` 区域。
3.  **发现**：看到 `F-String` 节点与 `JS Template Literal` 之间有一条虚线连接。
4.  **学习**：点击 `F-String`，右侧滑出卡片：“就像 JS 的反引号，但前面加 f”。
5.  **点亮**：在侧边栏做完一个小测试，节点瞬间爆发强光，并带动周围节点微亮（激活扩散）。
