import { useCallback } from "react";
import {
  ReactFlow,
  Node,
  Edge,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import { useNavigate } from "react-router";
import {
  School,
  AutoStories,
  Psychology,
  Assignment,
  WorkspacePremium,
} from "@mui/icons-material";
import "@xyflow/react/dist/style.css";

const IconNode = ({
  data,
}: {
  data: { label: string; icon: React.ReactNode };
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2px",
    }}
  >
    <div>{data.icon}</div>
    <div
      style={{
        fontSize: "0.675rem",
      }}
    >
      {data.label}
    </div>
  </div>
);

const nodeTypes = {
  iconNode: IconNode,
};

export default function Map() {
  const navigate = useNavigate();

  const initialNodes: Node[] = [
    {
      id: "1",
      type: "iconNode",
      data: {
        label: "Start Here",
        path: "/course/intro",
        icon: <School sx={{ fontSize: 32, color: "primary.main" }} />,
      },
      position: { x: 250, y: 0 },
    },
    {
      id: "2",
      type: "iconNode",
      data: {
        label: "Fundamentals",
        path: "/course/chapter-1",
        icon: <AutoStories sx={{ fontSize: 32, color: "primary.main" }} />,
      },
      position: { x: 250, y: 100 },
    },
    {
      id: "3",
      type: "iconNode",
      data: {
        label: "Advanced Topics",
        path: "/course/chapter-2",
        icon: <Psychology sx={{ fontSize: 32, color: "primary.main" }} />,
      },
      position: { x: 250, y: 200 },
    },
    {
      id: "4",
      type: "iconNode",
      data: {
        label: "Exercises",
        path: "/course/exercises",
        icon: <Assignment sx={{ fontSize: 32, color: "primary.main" }} />,
      },
      position: { x: 250, y: 300 },
    },
    {
      id: "5",
      type: "iconNode",
      data: {
        label: "Final Project",
        path: "/course/final-project",
        icon: <WorkspacePremium sx={{ fontSize: 32, color: "primary.main" }} />,
      },
      position: { x: 250, y: 400 },
    },
  ];

  const initialEdges: Edge[] = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
    { id: "e3-4", source: "3", target: "4" },
    { id: "e4-5", source: "4", target: "5" },
  ];

  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  const onNodeClick = useCallback(
    (_: any, node: Node) => {
      const path = node?.data?.path;
      if (path) {
        navigate(path);
      }
    },
    [navigate]
  );

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100vh",
      }}
    >
      <ReactFlow
        colorMode="dark"
        nodes={nodes}
        edges={edges}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
        proOptions={{ hideAttribution: true }}
      >
        <Background />
        <Controls
          style={{
            color: "black",
          }}
        />
      </ReactFlow>
    </div>
  );
}
