import "./App.css";
import { useCallback } from "react";
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

  return (
    <div style={{ height: 500 }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeType} fitView>
        {/* <MiniMap /> */}
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default App;
