// import 'antd/dist/antd.css'
import "./App.less";
import { Card } from "antd";
import { getTodayStatus } from "./service";

import { useRequest } from "ahooks";

function App() {
  const { data, loading } = useRequest(getTodayStatus);
  const signInFlag = data?.data?.data;

  return (
    <div className="App">
      <Card title="掘金签到" className="signIn" loading={loading}>
        今日
        {signInFlag ? "已" : "未"}
        签到
      </Card>
      <Card title="界面热键" className="winHotKey">
        1：绑定 谷歌浏览器
        <br />
        2：绑定 vscode
        <br />
        3：绑定 oneNote
        <br />
        4：未绑定
        <br />
        5：未绑定
        <br />
      </Card>
    </div>
  );
}

export default App;
