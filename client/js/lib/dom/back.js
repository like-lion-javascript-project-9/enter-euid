import { getNode } from "./getNode.js";

export const goToBack = (node) => {
  if (typeof node === "string") {
    node = getNode(node);
  }

  node.addEventListener("click", () => {
    history.back();
  });
};
