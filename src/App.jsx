import "./App.css";
import { useCallback, useEffect } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";
import EmployeeCard from "./Components/EmployeeCard";
import { initialEdges, initialNodes } from "./Workflow.constants";

const nodeType = {
  employeeCard: EmployeeCard,
};

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    setNodes(nodes.filter((node) => node.position.x === 0));
  }, []);

  const handleNodeClick = (event, node) => {
    let childs = node.data.children;
    if (childs.length) {
      childs.map((item) => {
        setNodes((prev) => [
          ...prev,
          ...initialNodes.filter((eq) => eq.id === item),
        ]);
      });
    }
  };

  return (
    <div style={{ height: 500 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeType}
        onNodeClick={handleNodeClick}
        fitView
      >
        {/* <MiniMap /> */}
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default App;
