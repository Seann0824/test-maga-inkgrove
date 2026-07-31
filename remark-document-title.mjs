/**
 * Markdown 中的第一个 H1 是文章标题源；页面布局已经渲染它，正文不再重复展示。
 */
export default function stripDocumentTitle() {
  return (tree) => {
    if (!Array.isArray(tree.children)) return;
    const index = tree.children.findIndex(
      (node) => node?.type === "heading" && node.depth === 1,
    );
    if (index >= 0) tree.children.splice(index, 1);
  };
}
