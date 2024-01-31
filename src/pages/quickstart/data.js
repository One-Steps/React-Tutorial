const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>データの表示</h1>
      {/* 上記のUserを使用してユーザー名を表示 */}
      <h1>Userを使用してユーザー名で上書き</h1>
      <img
        className="avatar"
        src=""
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
