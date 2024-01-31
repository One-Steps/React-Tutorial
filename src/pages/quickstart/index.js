import React from "react";

// コンポーネントの作成とネスト セクション用

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
      <h1>クイックスタート - React</h1>
      <h2>コンポーネントの作成とネスト セクション用</h2>

      <h3 style={{ marginTop: 20 }}>TODO</h3>
      <p>1.MyButtonコンポーネントを作成</p>
      <p>2.MyButtonコンポーネントをネストして画面に表示</p>
      {/* MyButtonコンポーネントをネスト */}
    </div>
  );
}

// MyButtonコンポーネントを作成
