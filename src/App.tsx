// import 'antd/dist/antd.css'
import "antd/lib/skeleton/style/index.less";
import "./App.less";
import { io } from "socket.io-client";
import { Card } from "antd";
import { getTodayStatus, getWinStatus } from "./service";

import { useRequest } from "ahooks";

const socket = io();

function App() {
  
  const { data: todayStatus, loading: signInLoading } = useRequest(async () => {
    const res = await getTodayStatus();
    return res?.data?.data;
  });

  const { data: winRender, loading: winStatusLoading } = useRequest(
    async () => {
      const res = await getWinStatus();
      const list = res?.data || [];
      list.shift(); // 丢去 null
      console.log(list)
      return list.map((item: any, index: number) => (
        <div key={index}>
          {index}: 绑定{item?.name}
        </div>
      ));
    }
  );

  return (
    <div className="App">
      <Card title="掘金签到" className="signIn" loading={signInLoading}>
        今日
        {todayStatus ? "已" : "未"}
        签到
      </Card>
      <Card title="界面热键" className="winHotKey" loading={winStatusLoading}>
        {winRender}
      </Card>
      <Card title="test" className="winHotKey">
        
      </Card>
    </div>
  );
}

export default App;
