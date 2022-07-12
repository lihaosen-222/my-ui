// import 'antd/dist/antd.css'
import  './App.less'
import { Button, Card } from 'antd'

function App() {

  return (
    <div className="App">
      <Card title="掘金签到" className='signIn'>今日已签到</Card>
      <Card title="界面热键" className='winHotKey'>
        1：绑定 谷歌浏览器<br/>
        2：绑定 vscode<br/>
        3：绑定 oneNote<br/>
        4：未绑定<br/>
        5：未绑定<br/>
      </Card>
    </div>
  )
}

export default App
