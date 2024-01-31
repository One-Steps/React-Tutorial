import React from "react";

export default function QuickStartPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <h1>クイックスタート用ページ</h1>
      <p>
        This is a quick start page. You can edit it at{" "}
        <code>src/pages/quickstart.js</code>.
      </p>
      {/* MyButtonコンポーネントをネスト */}
    </div>
  );
}

// MyButtonコンポーネントを作成
