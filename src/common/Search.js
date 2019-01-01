import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

const tabs = [
  { title: <Badge>First Tab</Badge> },
  { title: <Badge>Second Tab</Badge> },
  { title: <Badge>Third Tab</Badge> },
];

const TabExample = () => (
  <div>
    <Tabs tabs={tabs}
      initialPage={1}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of first tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of second tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
    </Tabs>
    <WhiteSpace />
  </div>
);

ReactDOM.render(<TabExample />, mountNode);