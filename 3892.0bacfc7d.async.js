"use strict";(self.webpackChunk_tool_pack_react_ui_monorepo=self.webpackChunk_tool_pack_react_ui_monorepo||[]).push([[3892],{33442:function(e,n,o){o.r(n),o.d(n,{Alert:function(){return t.bZ},Aside:function(){return t.xN},Button:function(){return t.zx},ButtonContext:function(){return t.bl},ButtonGroup:function(){return t.hE},Calendar:function(){return t.f},Collapse:function(){return t.UO},CollapseGroup:function(){return t.wj},CollapseTransition:function(){return t.A1},ConfigProvider:function(){return t.iV},DatePicker:function(){return t.Mt},Dialog:function(){return t.Vq},Divider:function(){return t.iz},Draggable:function(){return t._l},Drawer:function(){return t.dy},Dropdown:function(){return t.Lt},Empty:function(){return t.HY},Footer:function(){return t.$_},Header:function(){return t.h4},Icon:function(){return t.JO},Icons:function(){return a},Image:function(){return t.Ee},ImagePreview:function(){return t.eT},ImagePreviewGroup:function(){return t.yg},ImagePreviewGroupContext:function(){return t.Fn},Input:function(){return t.II},InputPopover:function(){return t.oc},Layout:function(){return t.Ar},Loading:function(){return t.gb},Main:function(){return t.or},Message:function(){return t.v0},MessageQueue:function(){return t.zp},NumberTransition:function(){return t.Z4},Option:function(){return t.Wx},PLACEMENTS:function(){return t.ky},PLACEMENTS_12:function(){return t.oN},PLACEMENTS_8:function(){return t.U_},Picker:function(){return t.cW},PickerPanel:function(){return t.N4},PopConfirm:function(){return t.EY},Popover:function(){return t.J2},Resizer:function(){return t.w_},Select:function(){return t.Ph},Slider:function(){return t.iR},Space:function(){return t.T},Switch:function(){return t.rs},TIMING_FNS:function(){return t.P2},TRANSITION_LIFE_CIRCLE:function(){return t.hq},TRANSITION_STATUS:function(){return t._J},Tag:function(){return t.Vp},Timeline:function(){return t.TY},TimelineItem:function(){return t.jq},Tooltip:function(){return t.u},Transition:function(){return t.uT},TransitionGroup:function(){return t.W3},VirtualList:function(){return t.CP},WordBalloon:function(){return t.KR},_Picker:function(){return t.$k},showLoading:function(){return t.QP},transitionCBAdapter:function(){return t.s8},useLoading:function(){return t.r$},useLoadingHolder:function(){return t.o4},useMessage:function(){return t.UD},useMessageHolder:function(){return t.uM}});var t=o(5911),a=o(56050)},60016:function(e,n,o){o.r(n),n.default={root:"fRZbROcsvv8ouRIIuGhQ"}},72490:function(e,n,o){o.r(n),n.default={root:"KKznMUGXggEKJ4PrLFSA"}},30889:function(e,n,o){o.r(n),n.default={root:"qbXGXhpI7BIt_rskFJtA"}},18422:function(e,n,o){o.r(n),n.default={root:"iit2nrKwOXICt1n3ohZu"}},54782:function(e,n,o){o.r(n),n.default={root:"NekYXYCD7EuCNfEEmKtt"}},15466:function(e,n,o){o.r(n),n.default={root:"RwCmY29cy4tM25LXh7N3"}},49613:function(e,n,o){o.r(n),n.default={root:"f0VsxuuQiwS6XGO7ZXVk"}},7367:function(e,n,o){o.r(n),n.default={root:"nRIsMYLNuZ0WlA7gAiGU"}},41902:function(e,n,o){o.r(n),n.default={root:"kaK0H8SbiYoHmc0i_68j"}},15544:function(e,n,o){o.r(n),n.default={root:"eaVqveOIZHc8F8qQB2o9"}},64729:function(e,n,o){o.r(n),n.default={root:"YdivQpSzxgMXpDl9bfms"}},10096:function(e,n,o){o.r(n),n.default={root:"NAuRWJ0qVLwxVoP0x4uP"}},22570:function(e,n,o){o.r(n),n.default={root:"H87MYYCHIvPN4XOdVKqg"}},45258:function(e,n,o){o.r(n),n.default={root:"MrciEZj8gLk4XizfmiBQ"}},53054:function(e,n,o){o.r(n),n.default={root:"lNBA8Zt7bQRJvpeXc2sE","ani-scale":"buiYod0Vma8oBBPbHcnk"}},99555:function(e,n,o){o.r(n)},3592:function(e,n,o){o.r(n)},26652:function(e,n){n.Z=`import { Alert } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Alert title={\`\u63D0\u793A\`}>foo bar</Alert>
    </>
  );
};

export default App;
`},37080:function(e,n){n.Z=`import { AlertProps, Switch, Alert, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const Types: Required<AlertProps>['type'][] = [
  'primary',
  'info',
  'success',
  'warning',
  'error',
];
const App: React.FC = () => {
  const [bordered, setBordered] = useState(false);

  return (
    <Space vertical fill>
      <div>
        <Switch onChange={setBordered} checked={bordered} />
      </div>
      {Types.map((t) => (
        <Alert bordered={bordered} title={\`\${t} tips\`} type={t} key={t}>
          foo bar
        </Alert>
      ))}
    </Space>
  );
};

export default App;
`},20542:function(e,n){n.Z=`import { AlertProps, Alert } from '@tool-pack/react-ui';
import React from 'react';

const Types: Required<AlertProps>['type'][] = [
  'primary',
  'info',
  'success',
  'warning',
  'error',
];
const App: React.FC = () => {
  return (
    <>
      {Types.map((t) => (
        <Alert
          attrs={{ style: { marginBottom: '10px' } }}
          title={\`\${t} tips\`}
          closable
          type={t}
          key={t}
        >
          foo bar
        </Alert>
      ))}
    </>
  );
};

export default App;
`},44904:function(e,n){n.Z=`import { Alert, Icons, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space vertical fill>
      <Alert icon={<Icons.CircleSuccessFill />} title="\u81EA\u5B9A\u4E49\u56FE\u6807">
        \u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u56FE\u6807\u66F4\u6362\u9ED8\u8BA4\u56FE\u6807
      </Alert>
      <Alert title="\u79FB\u9664\u56FE\u6807" icon={null}>
        icon \u4E3A null \u65F6\u79FB\u9664\u56FE\u6807
      </Alert>
    </Space>
  );
};

export default App;
`},614:function(e,n){n.Z=`import { useMessageHolder, Alert } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const [message, holder] = useMessageHolder();
  return (
    <>
      {holder}
      <Alert
        onClose={(e) => {
          if (window.confirm('\u662F\u5426\u5173\u95ED\u63D0\u793A?')) {
            message.success('\u5DF2\u5173\u95ED');
          } else {
            e.preventDefault();
          }
        }}
        title="\u63D0\u793A"
        closable
      >
        \u70B9\u51FB\u5173\u95ED\u6309\u94AE
      </Alert>
    </>
  );
};

export default App;
`},96332:function(e,n){n.Z=`import { Alert, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space vertical fill>
      <Alert title="\u5B8C\u5168\u72B6\u6001" bordered closable>
        \u5B8C\u5168\u72B6\u6001\u5305\u542B\uFF1A\u8FB9\u6846\u3001\u56FE\u6807\u3001\u6807\u9898\u3001\u63CF\u8FF0\u3001\u5173\u95ED\u6309\u94AE
      </Alert>
      <Alert bordered={false} title="\u79FB\u9664\u90E8\u5206" icon={null}>
        \u79FB\u9664\u8FB9\u6846\u3001\u56FE\u6807\u3001\u5173\u95ED\u6309\u94AE
      </Alert>
      <Alert bordered={false} title="\u79FB\u9664\u63CF\u8FF0" closable />
      <Alert
        title="\u53EA\u7559\u4E0B\u6807\u9898\u548C\u5173\u95ED\u6309\u94AE"
        bordered={false}
        icon={null}
        closable
      />

      <Alert bordered={false} closable>
        \u79FB\u9664title
      </Alert>
      <Alert bordered={false} icon={null} />
    </Space>
  );
};

export default App;
`},35210:function(e,n){n.Z=`import { Layout as OriginLayout, Button } from '@tool-pack/react-ui';
import React, { useCallback, useReducer } from 'react';

const App: React.FC = () => {
  const [times, _addTimes] = useReducer((s) => s + 1, 0);
  const addTimes = useCallback(() => _addTimes(), []);
  const types = [
    'default',
    'primary',
    'success',
    'info',
    'danger',
    'warning',
  ] as const;
  const sizes = ['small', 'medium', 'large'] as const;
  const shapes = ['none', 'default', 'round', 'circle'] as const;
  const plains = [false, true, 'dashed', 'text'] as const;
  return (
    <Layout vertical>
      click times: {times}
      <Layout>
        size:
        {sizes.map((size) => (
          <Button onClick={addTimes} className="test" size={size} key={size}>
            {size}
          </Button>
        ))}
      </Layout>
      <Layout>
        type:
        {types.map((type) => (
          <Button onClick={addTimes} type={type} key={type}>
            {type}
          </Button>
        ))}
      </Layout>
      <Layout>
        plain:
        {plains.map((plain) => (
          <Layout
            style={{ marginBottom: '5px', textAlign: 'center' }}
            key={String(plain)}
            vertical
          >
            ({String(plain)}):
            {types.map((type) => (
              <Button
                key={type + '_' + plain}
                onClick={addTimes}
                plain={plain}
                type={type}
              >
                {type}
              </Button>
            ))}
          </Layout>
        ))}
      </Layout>
      <Layout>
        disabled:
        {plains.map((plain) => (
          <Layout style={{ marginBottom: '5px' }} key={String(plain)} vertical>
            {types.map((type) => (
              <Button
                key={String(plain) + '_' + type}
                onClick={addTimes}
                plain={plain}
                type={type}
                disabled
              >
                {type}
              </Button>
            ))}
          </Layout>
        ))}
      </Layout>
      <Layout>
        shape:
        {sizes.map((size) =>
          shapes.map((shape) => (
            <Button
              key={size + '_' + shape}
              onClick={addTimes}
              type="primary"
              shape={shape}
              size={size}
            >
              {shape}
            </Button>
          )),
        )}
      </Layout>
    </Layout>
  );
};

const Layout: React.FC<Parameters<typeof OriginLayout>[0]> = React.memo(
  (props) => (
    <OriginLayout
      {...props}
      style={{
        overflow: 'visible',
        flexWrap: 'wrap',
        gap: '8px',
        ...props.style,
      }}
    >
      {props.children}
    </OriginLayout>
  ),
);

export default App;
`},3799:function(e,n){n.Z=`import { Layout as OriginLayout, Button } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => (
  <Layout vertical>
    <Layout>
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>
        Primary(disabled)
      </Button>
    </Layout>
    <Layout>
      <Button>Default</Button>
      <Button disabled>Default(disabled)</Button>
    </Layout>
  </Layout>
);

const Layout: React.FC<Parameters<typeof OriginLayout>[0]> = React.memo(
  (props) => (
    <OriginLayout
      {...props}
      style={{
        overflow: 'visible',
        flexWrap: 'wrap',
        gap: '8px',
        ...props.style,
      }}
    >
      {props.children}
    </OriginLayout>
  ),
);

export default App;
`},89357:function(e,n){n.Z=`import {
  ButtonContext,
  ButtonGroup,
  Button,
  Icons,
  Space,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const btns = [
    <Button icon={<Icons.CircleClose />} type="danger" size="small" key={1}>
      Delete
    </Button>,
    <Button icon={<Icons.CircleSuccess />} type="success" key={2}>
      Commit
    </Button>,
    <Button icon={<Icons.CircleInfo />} size="large" type="info" key={3}>
      Upload
    </Button>,
    <Button
      icon={<Icons.CircleWarning />}
      type="primary"
      size="large"
      key={4}
    />,
  ];
  return (
    <Space vertical>
      <ButtonGroup size="small">
        <ButtonContext.Provider value={{ size: 'large' }}>
          {btns}
        </ButtonContext.Provider>
      </ButtonGroup>
      <ButtonGroup size="medium">{btns}</ButtonGroup>
      <ButtonGroup>{btns}</ButtonGroup>
      <ButtonGroup size="large">{btns}</ButtonGroup>
      <ButtonContext.Provider
        value={{
          onClick: () => alert('click'),
          size: 'small',
          plain: true,
        }}
      >
        <ButtonGroup size="large">{btns}</ButtonGroup>
      </ButtonContext.Provider>

      <ButtonGroup>
        <ButtonContext.Provider value={{ type: 'primary', size: 'large' }}>
          <Button icon={<Icons.CircleClose />} shape="round">
            Delete
          </Button>
          <Button icon={<Icons.CircleSuccess />}>Commit</Button>
          <Button>Upload</Button>
          <Button icon={<Icons.CircleWarning />} shape="round" />
        </ButtonContext.Provider>
      </ButtonGroup>

      <ButtonGroup size="large">
        <ButtonContext.Provider value={{ type: 'danger' }}>
          <Button icon={<Icons.CircleClose />}>Delete</Button>
          <Button icon={<Icons.CircleSuccess />}>Commit</Button>
          <Button>Upload</Button>
          <Button icon={<Icons.CircleWarning />} plain="dashed" shape="round" />
        </ButtonContext.Provider>
      </ButtonGroup>

      <ButtonGroup>
        <ButtonContext.Provider value={{ plain: true }}>
          <Button icon={<Icons.CircleClose />}>Delete</Button>
          <Button icon={<Icons.CircleSuccess />}>Commit</Button>
          <Button icon={<Icons.CircleInfo />}>Upload</Button>
          <Button icon={<Icons.CircleWarning />} />
        </ButtonContext.Provider>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonContext.Provider value={{ type: 'success', plain: 'dashed' }}>
          <Button icon={<Icons.CircleClose />}>Delete</Button>
          <Button icon={<Icons.CircleSuccess />}>Commit</Button>
          <Button icon={<Icons.CircleInfo />}>Upload</Button>
          <Button icon={<Icons.CircleWarning />} />
        </ButtonContext.Provider>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonContext.Provider value={{ type: 'warning', plain: 'text' }}>
          <Button icon={<Icons.CircleClose />}>Delete</Button>
          <Button icon={<Icons.CircleSuccess />}>Commit</Button>
        </ButtonContext.Provider>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonContext.Provider value={{ type: 'primary' }}>
          <Button>items</Button>
          <Button
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
          />
        </ButtonContext.Provider>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonContext.Provider value={{ type: 'info' }}>
          <Button icon={<Icons.CircleClose />}>Delete</Button>
          <Button icon={<Icons.CircleSuccess />}>Commit</Button>
        </ButtonContext.Provider>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonContext.Provider value={{ type: 'primary', shape: 'none' }}>
          <Button icon={<Icons.CircleClose />}>Delete</Button>
          <Button icon={<Icons.CircleSuccess />} disabled>
            Commit
          </Button>
          <Button icon={<Icons.CircleInfo />}>Upload</Button>
          <Button icon={<Icons.CircleWarning />} />
        </ButtonContext.Provider>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonContext.Provider
          value={{
            type: 'primary',
            rightIcon: true,
            disabled: true,
            shape: 'round',
          }}
        >
          <Button icon={<Icons.CircleClose />}>Delete</Button>
          <Button icon={<Icons.CircleSuccess />} disabled>
            Commit
          </Button>
          <Button icon={<Icons.CircleInfo />}>Upload</Button>
          <Button icon={<Icons.CircleWarning />} />
        </ButtonContext.Provider>
      </ButtonGroup>
    </Space>
  );
};

export default App;
`},33116:function(e,n){n.Z=`import { Divider, Button, Icons, Space, Icon } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Space>
        <Button icon={<Icons.CircleClose />} type="danger" size="small">
          Delete
        </Button>

        <Button icon={<Icons.CircleSuccess />} type="success">
          Commit
        </Button>

        <Button icon={<Icons.CircleInfo />} size="large" type="info">
          Upload
        </Button>

        <Button icon={<Icons.CircleWarning />} type="primary" size="large" />
      </Space>
      <Divider>
        <Space>
          <Space>
            <Icon>
              <Icons.Up />
            </Icon>
            icon\u5728\u5DE6\u4FA7
          </Space>
          <Divider lineColor="lime" vertical />
          <Space>
            <Icon>
              <Icons.Down />
            </Icon>
            icon\u5728\u53F3\u4FA7
          </Space>
        </Space>
      </Divider>
      <Space>
        <Button
          icon={<Icons.CircleClose />}
          type="danger"
          size="small"
          rightIcon
        >
          Delete
        </Button>

        <Button icon={<Icons.CircleSuccess />} type="success" rightIcon>
          Commit
        </Button>

        <Button icon={<Icons.CircleInfo />} size="large" type="info" rightIcon>
          Upload
        </Button>

        <Button
          icon={<Icons.CircleWarning />}
          type="primary"
          size="large"
          rightIcon
        />
      </Space>
    </>
  );
};

export default App;
`},95075:function(e,n){n.Z=`import { Button, Icons, Space } from '@tool-pack/react-ui';
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <Space vertical>
      <Button
        onClick={() => setLoading(true)}
        icon={<Icons.CircleWarning />}
        loading={loading}
        type="danger"
        size="small"
      >
        Delete
      </Button>

      <Button onClick={() => setLoading(true)} loading={loading} type="success">
        Commit
      </Button>

      <Button
        onClick={() => setLoading(true)}
        icon={<Icons.CircleWarning />}
        loading={loading}
        type="primary"
        size="large"
      />
    </Space>
  );
};

export default App;
`},29903:function(e,n){n.Z=`import { Button, Layout } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => (
  <Layout
    style={{
      alignItems: 'center',
      overflow: 'visible',
      flexWrap: 'wrap',
      gap: '8px',
    }}
  >
    <Button type="primary" plain={false}>
      false
    </Button>
    <Button type="primary" plain>
      true
    </Button>
    <Button type="primary" plain="dashed">
      dashed
    </Button>
    <Button type="primary" plain="text">
      text
    </Button>
  </Layout>
);

export default App;
`},98601:function(e,n){n.Z=`import { Button, Layout } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => (
  <Layout
    style={{
      alignItems: 'center',
      overflow: 'visible',
      flexWrap: 'wrap',
      gap: '8px',
    }}
  >
    <Button shape="none">none</Button>
    <Button>default</Button>
    <Button shape="round">round</Button>
    <Button style={{ fontSize: '12px' }} shape="circle" size="large">
      circle
    </Button>
  </Layout>
);

export default App;
`},86657:function(e,n){n.Z=`import { Button, Layout } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => (
  <Layout
    style={{
      alignItems: 'center',
      overflow: 'visible',
      flexWrap: 'wrap',
      gap: '8px',
    }}
  >
    <Button size="small">small</Button>
    <Button>default</Button>
    <Button size="medium">medium</Button>
    <Button size="large">large</Button>
  </Layout>
);

export default App;
`},98980:function(e,n){n.Z=`import { Button, Layout } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => (
  <Layout style={{ overflow: 'visible', flexWrap: 'wrap', gap: '8px' }}>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="success">Success Button</Button>
    <Button type="info">Info Button</Button>
    <Button type="warning">warning Button</Button>
    <Button type="danger">warning Button</Button>
  </Layout>
);

export default App;
`},6677:function(e,n){n.Z=`import { Calendar } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<Date>(new Date());
  return (
    <>
      <Calendar onChange={setValue} value={value} />
      <div>\u5DF2\u9009\u65E5\u671F\uFF1A{value?.toString()}</div>
    </>
  );
};

export default App;
`},11686:function(e,n){n.Z=`import { Calendar } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Calendar
      dateCell={(d, attrs) => (
        <td {...attrs}>{\`\${[d.getMonth() + 1, d.getDate()]
          .map(String)
          .map((v) => v.padStart(2, '0'))
          .join('-')}\`}</td>
      )}
    />
  );
};

export default App;
`},92875:function(e,n){n.Z=`import { Calendar } from '@tool-pack/react-ui';
import React from 'react';

const now = new Date();
const arr = [now.getFullYear(), now.getMonth()] as const;
const date = now.getDate();

const yesterday = new Date(...arr, date - 1);
const tomorrow = new Date(...arr, date + 1);

const App: React.FC = () => {
  return (
    <>
      <h3>\u7981\u9009\u6628\u5929\u548C\u660E\u5929</h3>
      <Calendar
        dateDisabled={(date) => {
          return isSameDate(yesterday, date) || isSameDate(tomorrow, date);
        }}
      />
    </>
  );
};

function isSameDate(date1: Date, date2: Date): boolean {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

export default App;
`},31008:function(e,n){n.Z=`import { SelectOption, Calendar, Divider, Select } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const options: SelectOption[] = [
  { label: '\u4E00\u6708', value: 0 },
  { label: '\u4E8C\u6708', value: 1 },
  { label: '\u4E09\u6708', value: 2 },
  { label: '\u56DB\u6708', value: 3 },
  { label: '\u4E94\u6708', value: 4 },
  { label: '\u516D\u6708', value: 5 },
  { label: '\u4E03\u6708', value: 6 },
  { label: '\u516B\u6708', value: 7 },
  { label: '\u4E5D\u6708', value: 8 },
  { label: '\u5341\u6708', value: 9 },
  { label: '\u5341\u4E00\u6708', value: 10 },
  { label: '\u5341\u4E8C\u6708', value: 11 },
];

const App: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const formattedDate = \`\${date.getFullYear()}-\${String(
    date.getMonth() + 1,
  ).padStart(2, '0')}-\${String(date.getDate()).padStart(2, '0')}\`;
  return (
    <>
      <div
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <div>{formattedDate}</div>
        <Select
          onChange={(v) => setDate(new Date(date.getFullYear(), v))}
          value={date.getMonth()}
          options={options}
          size="small"
        />
      </div>
      <Divider />
      <Calendar header={false} value={date} />
    </>
  );
};

export default App;
`},5179:function(e,n){n.Z=`import { Calendar, Select, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6;
const weekDayNames = ['\u5929', '\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D'] as const;
const options = weekDayNames.map((n, index) => ({
  label: '\u661F\u671F' + n,
  value: index,
}));

const App: React.FC = () => {
  const [day, setDay] = useState<Day>(1);
  return (
    <>
      <Space>
        \u661F\u671F\u5F00\u59CB\u65E5\uFF1A
        <Select
          attrs={{ style: { width: '100px' } }}
          onChange={setDay}
          options={options}
          size="small"
          value={day}
        />
      </Space>
      <Calendar firstDay={day} />
    </>
  );
};

export default App;
`},33704:function(e,n){n.Z=`.root {
  :global {
    p {
      padding: 0 10px;
    }
  }
}
`},58205:function(e,n){n.Z=`import { CollapseTransition, Divider, Button } from '@tool-pack/react-ui';
import styles from './basic.module.scss';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [show, setShow] = useState(true);
  return (
    <div className={styles['root']}>
      <div style={{ paddingBottom: '8px', textAlign: 'center' }}>
        <Button onClick={() => setShow((v) => !v)}>
          {show ? '\u6536\u8D77' : '\u5C55\u5F00'}
        </Button>
      </div>
      <CollapseTransition show={show}>
        <div style={{ background: '#910852', color: 'white' }}>
          <p>
            \u9053\u51B2\u800C\u7528\u4E4B\u6216\u4E0D\u76C8\uFF0C\u6E0A\u516E\u4F3C\u4E07\u7269\u4E4B\u5B97\u3002\u632B\u5176\u9510\uFF0C\u89E3\u5176\u7EB7\uFF0C\u548C\u5176\u5149\uFF0C\u540C\u5176\u5C18\u3002\u6E5B\u516E\u4F3C\u6216\u5B58\uFF0C\u543E\u4E0D\u77E5\u8C01\u4E4B\u5B50\uFF0C\u8C61\u5E1D\u4E4B\u5148\u3002
          </p>
          <Divider />
          <p>
            \u5929\u5730\u4E0D\u4EC1\uFF0C\u4EE5\u4E07\u7269\u4E3A\u520D\uFF08ch\xFA\uFF09\u72D7\uFF1B\u5723\u4EBA\u4E0D\u4EC1\uFF0C\u4EE5\u767E\u59D3\u4E3A\u520D\u72D7\u3002\u5929\u5730\u4E4B\u95F4\uFF0C\u5176\u72B9\u6A50\u9FA0\uFF08tu\xF3
            yu\xE8\uFF09\u4E4E\uFF1F\u865A\u800C\u4E0D\u5C48\uFF0C\u52A8\u800C\u6108\u51FA\u3002\u591A\u8A00\u6570\uFF08shu\xF2\uFF09\u7A77\uFF0C\u4E0D\u5982\u5B88\u4E2D\u3002
          </p>
          <Divider />
          <p>
            \u8C37\u795E\u4E0D\u6B7B\uFF0C\u662F\u8C13\u7384\u725D\uFF08p\xECn\uFF09\uFF0C\u7384\u725D\u4E4B\u95E8\uFF0C\u662F\u8C13\u5929\u5730\u6839\u3002\u7EF5\u7EF5\u82E5\u5B58\uFF0C\u7528\u4E4B\u4E0D\u52E4\u3002
          </p>
        </div>
      </CollapseTransition>
    </div>
  );
};

export default App;
`},81307:function(e,n){n.Z=`import { CollapseTransition, Divider, Button } from '@tool-pack/react-ui';
import React, { useLayoutEffect, useState, useRef } from 'react';

const App: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const elRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const timer = setTimeout(() => {
      // \u7531\u4E8E\u5BBD\u5EA6\u53D8\u5316\u4F1A\u5BFC\u81F4\u6587\u5B57\u5185\u5BB9\u91CD\u6392\uFF0C\u6240\u4EE5\u9700\u8981\u56FA\u5B9A\u4F4F\u5F53\u524D\u5BBD\u5EA6
      el.style.width = getComputedStyle(el).width;
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div style={{ paddingBottom: '8px', textAlign: 'center' }}>
        <Button onClick={() => setVisible((v) => !v)}>toggle</Button>
      </div>
      <CollapseTransition show={visible} width>
        <div style={{ background: '#910852', color: 'white' }}>
          {/* \u4E0B\u9762\u8FD9\u5C42 div \u662F\u4E3A\u4E86\u56FA\u5B9A\u5BBD\u5EA6 */}
          <div style={{ padding: '10px' }} ref={elRef}>
            <p>
              \u8F7D\uFF08z\xE0i\uFF09\u8425\u9B44\u62B1\u4E00\uFF0C\u80FD\u65E0\u79BB\u4E4E\uFF1F\u4E13\u6C14\u81F4\u67D4\uFF0C\u80FD\u5A74\u513F\u4E4E\uFF1F\u6DA4\u9664\u7384\u89C8\uFF0C\u80FD\u65E0\u75B5\u4E4E\uFF1F\u7231\u6C11\u6CBB\u56FD\uFF0C\u80FD\u65E0\u77E5\uFF08zh\xEC\uFF09\u4E4E\uFF1F\u5929\u95E8\u5F00\u9616\uFF08h\xE9\uFF09\uFF0C\u80FD\u65E0\u96CC\u4E4E\uFF1F\u660E\u767D\u56DB\u8FBE\uFF0C\u80FD\u65E0\u4E3A\u4E4E\uFF1F\u751F\u4E4B\u3001\u755C\uFF08x\xF9\uFF09\u4E4B\uFF0C\u751F\u800C\u4E0D\u6709\uFF0C\u4E3A\u800C\u4E0D\u6043\uFF0C\u957F\uFF08zh\u01CEng\uFF09\u800C\u4E0D\u5BB0\uFF0C\u662F\u8C13\u7384\u5FB7\u3002
            </p>
            <Divider />
            <p>
              \u4E09\u5341\u8F90\u5171\u4E00\u6BC2\uFF08g\u01D4\uFF09\uFF0C\u5F53\u5176\u65E0\uFF0C\u6709\u8F66\u4E4B\u7528\u3002\u57CF\u57F4\uFF08sh\u0101n
              zh\xED\uFF09\u4EE5\u4E3A\u5668\uFF0C\u5F53\u5176\u65E0\uFF0C\u6709\u5668\u4E4B\u7528\u3002\u51FF\u6237\u7256\uFF08y\u01D2u\uFF09\u4EE5\u4E3A\u5BA4\uFF0C\u5F53\u5176\u65E0\uFF0C\u6709\u5BA4\u4E4B\u7528\u3002\u6545\u6709\u4E4B\u4EE5\u4E3A\u5229\uFF0C\u65E0\u4E4B\u4EE5\u4E3A\u7528\u3002
            </p>
            <Divider />
            <p>
              \u4E94\u8272\u4EE4\u4EBA\u76EE\u76F2\uFF0C\u4E94\u97F3\u4EE4\u4EBA\u8033\u804B\uFF0C\u4E94\u5473\u4EE4\u4EBA\u53E3\u723D\uFF0C\u9A70\u9A8B\u754B\uFF08ti\xE1n\uFF09\u730E\u4EE4\u4EBA\u5FC3\u53D1\u72C2\uFF0C\u96BE\u5F97\u4E4B\u8D27\u4EE4\u4EBA\u884C\u59A8\u3002\u662F\u4EE5\u5723\u4EBA\u4E3A\u8179\u4E0D\u4E3A\u76EE\uFF0C\u6545\u53BB\u5F7C\u53D6\u6B64\u3002
            </p>
          </div>
        </div>
      </CollapseTransition>
    </div>
  );
};

export default App;
`},71763:function(e,n){n.Z=`import { CollapseTransition, Divider, Button } from '@tool-pack/react-ui';
import styles from './basic.module.scss';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [show, setShow] = useState(true);
  return (
    <div className={styles['root']}>
      <div style={{ paddingBottom: '8px', textAlign: 'center' }}>
        <Button onClick={() => setShow((v) => !v)}>toggle</Button>
      </div>
      <CollapseTransition show={show}>
        {/* \u52A0\u4E86 padding \u5185\u5BB9\u4F1A\u6EDA\u52A8 */}
        <div style={{ background: '#910852', padding: '20px', color: 'white' }}>
          <p>
            \u9053\u51B2\u800C\u7528\u4E4B\u6216\u4E0D\u76C8\uFF0C\u6E0A\u516E\u4F3C\u4E07\u7269\u4E4B\u5B97\u3002\u632B\u5176\u9510\uFF0C\u89E3\u5176\u7EB7\uFF0C\u548C\u5176\u5149\uFF0C\u540C\u5176\u5C18\u3002\u6E5B\u516E\u4F3C\u6216\u5B58\uFF0C\u543E\u4E0D\u77E5\u8C01\u4E4B\u5B50\uFF0C\u8C61\u5E1D\u4E4B\u5148\u3002
          </p>
          <Divider />
          <p>
            \u5929\u5730\u4E0D\u4EC1\uFF0C\u4EE5\u4E07\u7269\u4E3A\u520D\uFF08ch\xFA\uFF09\u72D7\uFF1B\u5723\u4EBA\u4E0D\u4EC1\uFF0C\u4EE5\u767E\u59D3\u4E3A\u520D\u72D7\u3002\u5929\u5730\u4E4B\u95F4\uFF0C\u5176\u72B9\u6A50\u9FA0\uFF08tu\xF3
            yu\xE8\uFF09\u4E4E\uFF1F\u865A\u800C\u4E0D\u5C48\uFF0C\u52A8\u800C\u6108\u51FA\u3002\u591A\u8A00\u6570\uFF08shu\xF2\uFF09\u7A77\uFF0C\u4E0D\u5982\u5B88\u4E2D\u3002
          </p>
          <Divider />
          <p>
            \u8C37\u795E\u4E0D\u6B7B\uFF0C\u662F\u8C13\u7384\u725D\uFF08p\xECn\uFF09\uFF0C\u7384\u725D\u4E4B\u95E8\uFF0C\u662F\u8C13\u5929\u5730\u6839\u3002\u7EF5\u7EF5\u82E5\u5B58\uFF0C\u7528\u4E4B\u4E0D\u52E4\u3002
          </p>
        </div>
      </CollapseTransition>
    </div>
  );
};

export default App;
`},25872:function(e,n){n.Z=`import { CollapseTransition, Divider, Button } from '@tool-pack/react-ui';
import React, { useState } from 'react';
const App: React.FC = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <div style={{ paddingBottom: '8px', textAlign: 'center' }}>
        <Button onClick={() => setVisible((v) => !v)}>
          {visible ? '\u6536\u8D77' : '\u5C55\u5F00'}
        </Button>
      </div>
      <CollapseTransition width>
        {visible && (
          <div>
            <div style={{ background: '#910852', color: 'white' }}>
              <div style={{ padding: '10px' }}>
                <p>
                  \u5929\u957F\u5730\u4E45\u3002\u5929\u5730\u6240\u4EE5\u80FD\u957F\u4E14\u4E45\u8005\uFF0C\u4EE5\u5176\u4E0D\u81EA\u751F\uFF0C\u6545\u80FD\u957F\u751F\u3002\u662F\u4EE5\u5723\u4EBA\u540E\u5176\u8EAB\u800C\u8EAB\u5148\uFF0C\u5916\u5176\u8EAB\u800C\u8EAB\u5B58\u3002\u975E\u4EE5\u5176\u65E0\u79C1\u90AA\uFF08y\xE9\uFF09\uFF1F\u6545\u80FD\u6210\u5176\u79C1\u3002
                </p>
                <Divider />
                <p>
                  \u4E0A\u5584\u82E5\u6C34\u3002\u6C34\u5584\u5229\u4E07\u7269\u800C\u4E0D\u4E89\uFF0C\u5904\u4F17\u4EBA\u4E4B\u6240\u6076\uFF08w\xF9\uFF09\uFF0C\u6545\u51E0\uFF08j\u012B\uFF09\u4E8E\u9053\u3002\u5C45\u5584\u5730\uFF0C\u5FC3\u5584\u6E0A\uFF0C\u4E0E\u5584\u4EC1\uFF0C\u8A00\u5584\u4FE1\uFF0C\u6B63\u5584\u6CBB\uFF0C\u4E8B\u5584\u80FD\uFF0C\u52A8\u5584\u65F6\u3002\u592B\u552F\u4E0D\u4E89\uFF0C\u6545\u65E0\u5C24\u3002
                </p>
                <Divider />
                <p>
                  \u6301\u800C\u76C8\u4E4B\uFF0C\u4E0D\u5982\u5176\u5DF2\u3002\u63E3(chu\u01CEi)\u800C\u9510\u4E4B\uFF0C\u4E0D\u53EF\u957F\u4FDD\u3002\u91D1\u7389\u6EE1\u5802\uFF0C\u83AB\u4E4B\u80FD\u5B88\u3002\u5BCC\u8D35\u800C\u9A84\uFF0C\u81EA\u9057\uFF08y\xED\uFF09\u5176\u548E\u3002\u529F\u6210\u8EAB\u9000\uFF0C\u5929\u4E4B\u9053\u3002
                </p>
              </div>
            </div>
          </div>
        )}
      </CollapseTransition>
    </div>
  );
};

export default App;
`},8863:function(e,n){n.Z=`import { type CollapseGroupItem, CollapseGroup } from '@tool-pack/react-ui';
import React from 'react';

const items: CollapseGroupItem[] = [
  {
    children:
      '\u91CD\u4E3A\u8F7B\u6839\uFF0C\u9759\u4E3A\u8E81\u541B\u3002\u662F\u4EE5\u5723\u4EBA\u7EC8\u65E5\u884C\u4E0D\u79BB\u8F8E\uFF08z\u012B\uFF09\u91CD\u3002\u867D\u6709\u8363\u89C2\uFF08gu\xE0n\uFF09\uFF0C\u71D5\u5904\u8D85\u7136\uFF0C\u5948\u4F55\u4E07\u4E58\uFF08sh\xE8ng\uFF09\u4E4B\u4E3B\uFF0C\u800C\u4EE5\u8EAB\u8F7B\u5929\u4E0B\uFF1F\u8F7B\u5219\u5931\u672C\uFF0C\u8E81\u5219\u5931\u541B\u3002',
    title: '\u7B2C\u4E8C\u5341\u516D\u7AE0',
    key: '1',
  },
  {
    children:
      '\u5584\u884C\u65E0\u8F99\u8FF9\uFF0C\u5584\u8A00\u65E0\u7455\u8C2A(xi\xE1 zh\xE9)\uFF0C\u5584\u6570\uFF08sh\u01D4\uFF09\u4E0D\u7528\u7B79\u7B56\uFF0C\u5584\u95ED\u65E0\u5173\u6957\uFF08ji\xE0n\uFF09\u800C\u4E0D\u53EF\u5F00\uFF0C\u5584\u7ED3\u65E0\u7EF3\u7EA6\u800C\u4E0D\u53EF\u89E3\u3002\u662F\u4EE5\u5723\u4EBA\u5E38\u5584\u6551\u4EBA\uFF0C\u6545\u65E0\u5F03\u4EBA\uFF1B\u5E38\u5584\u6551\u7269\uFF0C\u6545\u65E0\u5F03\u7269\uFF0C\u662F\u8C13\u88AD\u660E\u3002\u6545\u5584\u4EBA\u8005\uFF0C\u4E0D\u5584\u4EBA\u4E4B\u5E08\uFF1B\u4E0D\u5584\u4EBA\u8005\uFF0C\u5584\u4EBA\u4E4B\u8D44\u3002\u4E0D\u8D35\u5176\u5E08\uFF0C\u4E0D\u7231\u5176\u8D44\uFF0C\u867D\u667A\u5927\u8FF7\uFF0C\u662F\u8C13\u8981\u5999',
    title: '\u7B2C\u4E8C\u5341\u4E03\u7AE0',
    key: '2',
  },

  {
    children:
      '\u77E5\u5176\u96C4\uFF0C\u5B88\u5176\u96CC\uFF0C\u4E3A\u5929\u4E0B\u6EAA\u3002\u4E3A\u5929\u4E0B\u6EAA\uFF0C\u5E38\u5FB7\u4E0D\u79BB\uFF0C\u590D\u5F52\u4E8E\u5A74\u513F\u3002\u77E5\u5176\u767D\uFF0C\u5B88\u5176\u9ED1\uFF0C\u4E3A\u5929\u4E0B\u5F0F\u3002\u4E3A\u5929\u4E0B\u5F0F\uFF0C\u5E38\u5FB7\u4E0D\u5FD2\uFF08t\xE8\uFF09\uFF0C\u590D\u5F52\u4E8E\u65E0\u6781\u3002\u77E5\u5176\u8363\uFF0C\u5B88\u5176\u8FB1\uFF0C\u4E3A\u5929\u4E0B\u8C37\u3002\u4E3A\u5929\u4E0B\u8C37\uFF0C\u5E38\u5FB7\u4E43\u8DB3\uFF0C\u590D\u5F52\u4E8E\u6734\u3002\u6734\u6563\u5219\u4E3A\u5668\uFF0C\u5723\u4EBA\u7528\u4E4B\u5219\u4E3A\u5B98\u957F\uFF08zh\u01CEng\uFF09\u3002\u6545\u5927\u5236\u4E0D\u5272\u3002',
    title: '\u7B2C\u4E8C\u5341\u516B\u7AE0',
    key: '3',
  },
];
const App: React.FC = () => {
  return (
    <div>
      <CollapseGroup items={items} accordion />
    </div>
  );
};

export default App;
`},25489:function(e,n){n.Z=`import { type CollapseGroupItem, CollapseGroup } from '@tool-pack/react-ui';
import React from 'react';

const items: CollapseGroupItem[] = [
  {
    children:
      '\u9053\u53EF\u9053\uFF0C\u975E\u5E38\u9053\uFF1B\u540D\u53EF\u540D\uFF0C\u975E\u5E38\u540D\u3002\u65E0\u540D\u5929\u5730\u4E4B\u59CB\uFF0C\u6709\u540D\u4E07\u7269\u4E4B\u6BCD\u3002\u6545\u5E38\u65E0\u6B32\uFF0C\u4EE5\u89C2\u5176\u5999\uFF1B\u5E38\u6709\u6B32\uFF0C\u4EE5\u89C2\u5176\u5FBC\uFF08ji\xE0o\uFF09\u3002\u6B64\u4E24\u8005\u540C\u51FA\u800C\u5F02\u540D\uFF0C\u540C\u8C13\u4E4B\u7384\uFF0C\u7384\u4E4B\u53C8\u7384\uFF0C\u4F17\u5999\u4E4B\u95E8\u3002',
    title: '\u7B2C\u4E00\u7AE0',
    key: '1',
  },
  {
    children:
      '\u5929\u4E0B\u7686\u77E5\u7F8E\u4E4B\u4E3A\u7F8E\uFF0C\u65AF\u6076\uFF08\xE8\uFF09\u5DF2\uFF1B\u7686\u77E5\u5584\u4E4B\u4E3A\u5584\uFF0C\u65AF\u4E0D\u5584\u5DF2\u3002\u6545\u6709\u65E0\u76F8\u751F\uFF0C\u96BE\u6613\u76F8\u6210\uFF0C\u957F\u77ED\u76F8\u8F83\uFF0C\u9AD8\u4E0B\u76F8\u503E\uFF0C\u97F3\u58F0\u76F8\u548C\uFF08h\xE8\uFF09\uFF0C\u524D\u540E\u76F8\u968F\u3002\u662F\u4EE5\u5723\u4EBA\u5904\u65E0\u4E3A\u4E4B\u4E8B\uFF0C\u884C\u4E0D\u8A00\u4E4B\u6559\uFF0C\u4E07\u7269\u4F5C\u7109\u800C\u4E0D\u8F9E\uFF0C\u751F\u800C\u4E0D\u6709\uFF0C\u4E3A\u800C\u4E0D\u6043\uFF0C\u529F\u6210\u800C\u5F17\u5C45\u3002\u592B\uFF08f\xFA\uFF09\u552F\u5F17\u5C45\uFF0C\u662F\u4EE5\u4E0D\u53BB\u3002',
    title: '\u7B2C\u4E8C\u7AE0',
    key: '2',
  },
  {
    children:
      '\u4E0D\u5C1A\u8D24\uFF0C\u4F7F\u6C11\u4E0D\u4E89\uFF1B\u4E0D\u8D35\u96BE\u5F97\u4E4B\u8D27\uFF0C\u4F7F\u6C11\u4E0D\u4E3A\u76D7\uFF1B\u4E0D\u89C1\uFF08xi\xE0n\uFF09\u53EF\u6B32\uFF0C\u4F7F\u6C11\u5FC3\u4E0D\u4E71\u3002\u662F\u4EE5\u5723\u4EBA\u4E4B\u6CBB\uFF0C\u865A\u5176\u5FC3\uFF0C\u5B9E\u5176\u8179\uFF1B\u5F31\u5176\u5FD7\uFF0C\u5F3A\u5176\u9AA8\u3002\u5E38\u4F7F\u6C11\u65E0\u77E5\u65E0\u6B32\uFF0C\u4F7F\u592B\uFF08f\xFA\uFF09\u667A\u8005\u4E0D\u6562\u4E3A\u4E5F\u3002\u4E3A\u65E0\u4E3A\uFF0C\u5219\u65E0\u4E0D\u6CBB\u3002',
    title: '\u7B2C\u4E09\u7AE0',
    key: '3',
  },
  {
    children:
      '\u9053\u51B2\u800C\u7528\u4E4B\u6216\u4E0D\u76C8\uFF0C\u6E0A\u516E\u4F3C\u4E07\u7269\u4E4B\u5B97\u3002\u632B\u5176\u9510\uFF0C\u89E3\u5176\u7EB7\uFF0C\u548C\u5176\u5149\uFF0C\u540C\u5176\u5C18\u3002\u6E5B\u516E\u4F3C\u6216\u5B58\uFF0C\u543E\u4E0D\u77E5\u8C01\u4E4B\u5B50\uFF0C\u8C61\u5E1D\u4E4B\u5148\u3002',
    title: '\u7B2C\u56DB\u7AE0',
    key: '4',
  },
  {
    children:
      '\u5929\u5730\u4E0D\u4EC1\uFF0C\u4EE5\u4E07\u7269\u4E3A\u520D\uFF08ch\xFA\uFF09\u72D7\uFF1B\u5723\u4EBA\u4E0D\u4EC1\uFF0C\u4EE5\u767E\u59D3\u4E3A\u520D\u72D7\u3002\u5929\u5730\u4E4B\u95F4\uFF0C\u5176\u72B9\u6A50\u9FA0\uFF08tu\xF3 yu\xE8\uFF09\u4E4E\uFF1F\u865A\u800C\u4E0D\u5C48\uFF0C\u52A8\u800C\u6108\u51FA\u3002\u591A\u8A00\u6570\uFF08shu\xF2\uFF09\u7A77\uFF0C\u4E0D\u5982\u5B88\u4E2D\u3002',
    title: '\u7B2C\u4E94\u7AE0',
    key: '5',
  },
];
const App: React.FC = () => {
  return <CollapseGroup collapseProps={{ expanded: true }} items={items} />;
};

export default App;
`},3522:function(e,n){n.Z=`import { type CollapseGroupItem, CollapseGroup } from '@tool-pack/react-ui';
import React from 'react';

const items: CollapseGroupItem[] = [
  {
    children:
      '\u6301\u800C\u76C8\u4E4B\uFF0C\u4E0D\u5982\u5176\u5DF2\u3002\u63E3(chu\u01CEi)\u800C\u9510\u4E4B\uFF0C\u4E0D\u53EF\u957F\u4FDD\u3002\u91D1\u7389\u6EE1\u5802\uFF0C\u83AB\u4E4B\u80FD\u5B88\u3002\u5BCC\u8D35\u800C\u9A84\uFF0C\u81EA\u9057\uFF08y\xED\uFF09\u5176\u548E\u3002\u529F\u6210\u8EAB\u9000\uFF0C\u5929\u4E4B\u9053\u3002',
    title: '\u7B2C\u4E5D\u7AE0',
    key: '1',
  },
  {
    children:
      '\u8F7D\uFF08z\xE0i\uFF09\u8425\u9B44\u62B1\u4E00\uFF0C\u80FD\u65E0\u79BB\u4E4E\uFF1F\u4E13\u6C14\u81F4\u67D4\uFF0C\u80FD\u5A74\u513F\u4E4E\uFF1F\u6DA4\u9664\u7384\u89C8\uFF0C\u80FD\u65E0\u75B5\u4E4E\uFF1F\u7231\u6C11\u6CBB\u56FD\uFF0C\u80FD\u65E0\u77E5\uFF08zh\xEC\uFF09\u4E4E\uFF1F\u5929\u95E8\u5F00\u9616\uFF08h\xE9\uFF09\uFF0C\u80FD\u65E0\u96CC\u4E4E\uFF1F\u660E\u767D\u56DB\u8FBE\uFF0C\u80FD\u65E0\u4E3A\u4E4E\uFF1F\u751F\u4E4B\u3001\u755C\uFF08x\xF9\uFF09\u4E4B\uFF0C\u751F\u800C\u4E0D\u6709\uFF0C\u4E3A\u800C\u4E0D\u6043\uFF0C\u957F\uFF08zh\u01CEng\uFF09\u800C\u4E0D\u5BB0\uFF0C\u662F\u8C13\u7384\u5FB7\u3002',
    disabled: true,
    expanded: true,
    title: '\u7B2C\u5341\u7AE0',
    key: '2',
  },

  {
    children:
      '\u4E09\u5341\u8F90\u5171\u4E00\u6BC2\uFF08g\u01D4\uFF09\uFF0C\u5F53\u5176\u65E0\uFF0C\u6709\u8F66\u4E4B\u7528\u3002\u57CF\u57F4\uFF08sh\u0101n zh\xED\uFF09\u4EE5\u4E3A\u5668\uFF0C\u5F53\u5176\u65E0\uFF0C\u6709\u5668\u4E4B\u7528\u3002\u51FF\u6237\u7256\uFF08y\u01D2u\uFF09\u4EE5\u4E3A\u5BA4\uFF0C\u5F53\u5176\u65E0\uFF0C\u6709\u5BA4\u4E4B\u7528\u3002\u6545\u6709\u4E4B\u4EE5\u4E3A\u5229\uFF0C\u65E0\u4E4B\u4EE5\u4E3A\u7528\u3002 ',
    title: '\u7B2C\u5341\u4E00\u7AE0',
    key: '3',
  },
];
const App: React.FC = () => {
  return (
    <div>
      <CollapseGroup items={items} />
    </div>
  );
};

export default App;
`},29320:function(e,n){n.Z=`import { type CollapseGroupItem, CollapseGroup } from '@tool-pack/react-ui';
import React from 'react';

const items: CollapseGroupItem[] = [
  {
    children:
      '\u8C37\u795E\u4E0D\u6B7B\uFF0C\u662F\u8C13\u7384\u725D\uFF08p\xECn\uFF09\uFF0C\u7384\u725D\u4E4B\u95E8\uFF0C\u662F\u8C13\u5929\u5730\u6839\u3002\u7EF5\u7EF5\u82E5\u5B58\uFF0C\u7528\u4E4B\u4E0D\u52E4\u3002',

    title: '\u7B2C\u516D\u7AE0',
    key: '1',
  },
  {
    children:
      '\u5929\u957F\u5730\u4E45\u3002\u5929\u5730\u6240\u4EE5\u80FD\u957F\u4E14\u4E45\u8005\uFF0C\u4EE5\u5176\u4E0D\u81EA\u751F\uFF0C\u6545\u80FD\u957F\u751F\u3002\u662F\u4EE5\u5723\u4EBA\u540E\u5176\u8EAB\u800C\u8EAB\u5148\uFF0C\u5916\u5176\u8EAB\u800C\u8EAB\u5B58\u3002\u975E\u4EE5\u5176\u65E0\u79C1\u90AA\uFF08y\xE9\uFF09\uFF1F\u6545\u80FD\u6210\u5176\u79C1',
    title: '\u7B2C\u4E03\u7AE0',
    key: '2',
  },

  {
    children:
      '\u4E0A\u5584\u82E5\u6C34\u3002\u6C34\u5584\u5229\u4E07\u7269\u800C\u4E0D\u4E89\uFF0C\u5904\u4F17\u4EBA\u4E4B\u6240\u6076\uFF08w\xF9\uFF09\uFF0C\u6545\u51E0\uFF08j\u012B\uFF09\u4E8E\u9053\u3002\u5C45\u5584\u5730\uFF0C\u5FC3\u5584\u6E0A\uFF0C\u4E0E\u5584\u4EC1\uFF0C\u8A00\u5584\u4FE1\uFF0C\u6B63\u5584\u6CBB\uFF0C\u4E8B\u5584\u80FD\uFF0C\u52A8\u5584\u65F6\u3002\u592B\u552F\u4E0D\u4E89\uFF0C\u6545\u65E0\u5C24\u3002',
    expanded: false,
    title: '\u7B2C\u516B\u7AE0',
    key: '3',
  },
];
const App: React.FC = () => {
  return (
    <div>
      <CollapseGroup collapseProps={{ expanded: true }} items={items} />
    </div>
  );
};

export default App;
`},7057:function(e,n){n.Z=`import {
  type CollapseGroupItem,
  CollapseGroup,
  Tooltip,
} from '@tool-pack/react-ui';
import React from 'react';

const items: CollapseGroupItem[] = [
  {
    children:
      '\u4E94\u8272\u4EE4\u4EBA\u76EE\u76F2\uFF0C\u4E94\u97F3\u4EE4\u4EBA\u8033\u804B\uFF0C\u4E94\u5473\u4EE4\u4EBA\u53E3\u723D\uFF0C\u9A70\u9A8B\u754B\uFF08ti\xE1n\uFF09\u730E\u4EE4\u4EBA\u5FC3\u53D1\u72C2\uFF0C\u96BE\u5F97\u4E4B\u8D27\u4EE4\u4EBA\u884C\u59A8\u3002\u662F\u4EE5\u5723\u4EBA\u4E3A\u8179\u4E0D\u4E3A\u76EE\uFF0C\u6545\u53BB\u5F7C\u53D6\u6B64\u3002',
    title: '\u7B2C\u5341\u4E8C\u7AE0',
    key: '1',
  },
  {
    children:
      '\u5BA0\u8FB1\u82E5\u60CA\uFF0C\u8D35\u5927\u60A3\u82E5\u8EAB\u3002\u4F55\u8C13\u5BA0\u8FB1\u82E5\u60CA\uFF1F\u5BA0\u4E3A\u4E0B\uFF0C\u5F97\u4E4B\u82E5\u60CA\uFF0C\u5931\u4E4B\u82E5\u60CA\uFF0C\u662F\u8C13\u5BA0\u8FB1\u82E5\u60CA\u3002\u4F55\u8C13\u8D35\u5927\u60A3\u82E5\u8EAB\uFF1F\u543E\u6240\u4EE5\u6709\u5927\u60A3\u8005\uFF0C\u4E3A\u543E\u6709\u8EAB\uFF0C\u53CA\u543E\u65E0\u8EAB\uFF0C\u543E\u6709\u4F55\u60A3\uFF01\u6545\u8D35\u4EE5\u8EAB\u4E3A\u5929\u4E0B\uFF0C\u82E5\u53EF\u5BC4\u5929\u4E0B\uFF1B\u7231\u4EE5\u8EAB\u4E3A\u5929\u4E0B\uFF0C\u82E5\u53EF\u6258\u5929\u4E0B\u3002',
    title: '\u7B2C\u5341\u4E09\u7AE0',
    key: '2',
  },

  {
    children:
      '\u89C6\u4E4B\u4E0D\u89C1\u540D\u66F0\u5937\uFF0C\u542C\u4E4B\u4E0D\u95FB\u540D\u66F0\u5E0C\uFF0C\u640F\u4E4B\u4E0D\u5F97\u540D\u66F0\u5FAE\u3002\u6B64\u4E09\u8005\u4E0D\u53EF\u81F4\u8BD8\uFF08ji\xE9\uFF09\uFF0C\u6545\u6DF7\uFF08h\xF9n\uFF09\u800C\u4E3A\u4E00\u3002\u5176\u4E0A\u4E0D\u76A6\uFF08ji\u01CEo\u768E\uFF09\uFF0C\u5176\u4E0B\u4E0D\u6627\u3002\u7EF3\u7EF3(m\u01D0n m\u01D0n )\u4E0D\u53EF\u540D\uFF0C\u590D\u5F52\u4E8E\u65E0\u7269\uFF0C\u662F\u8C13\u65E0\u72B6\u4E4B\u72B6\uFF0C\u65E0\u7269\u4E4B\u8C61\u3002\u662F\u8C13\u60DA\u604D\u3002\u8FCE\u4E4B\u4E0D\u89C1\u5176\u9996\uFF0C\u968F\u4E4B\u4E0D\u89C1\u5176\u540E\u3002\u6267\u53E4\u4E4B\u9053\uFF0C\u4EE5\u5FA1\u4ECA\u4E4B\u6709\uFF0C\u80FD\u77E5\u53E4\u59CB\uFF0C\u662F\u8C13\u9053\u7EAA\u3002',
    extra: (
      <Tooltip title="\u7B2C\u5341\u56DB\u7AE0">
        <span>\u3010\u9053\u5FB7\u7ECF\u3011</span>
      </Tooltip>
    ),
    title: '\u7B2C\u5341\u56DB\u7AE0',
    key: '3',
  },
];
const App: React.FC = () => {
  return (
    <div>
      <CollapseGroup
        collapseProps={{
          extra: '\u300A\u9053\u5FB7\u7ECF\u300B',
        }}
        items={items}
      />
    </div>
  );
};

export default App;
`},77648:function(e,n){n.Z=`import { type CollapseGroupItem, CollapseGroup } from '@tool-pack/react-ui';
import React from 'react';
const items: CollapseGroupItem[] = [
  {
    children:
      '\u5927\u9053\u5E9F\uFF0C\u6709\u4EC1\u4E49\uFF1B\u6167\u667A\u51FA\uFF0C\u6709\u5927\u4F2A\uFF1B\u516D\u4EB2\u4E0D\u548C\uFF0C\u6709\u5B5D\u6148\uFF1B\u56FD\u5BB6\u660F\u4E71\uFF0C\u6709\u5FE0\u81E3\u3002',
    title: '\u7B2C\u5341\u516B\u7AE0',
    key: '1',
  },
  {
    children:
      '\u7EDD\u5723\u5F03\u667A\uFF0C\u6C11\u5229\u767E\u500D\uFF1B\u7EDD\u4EC1\u5F03\u4E49\uFF0C\u6C11\u590D\u5B5D\u6148\uFF1B\u7EDD\u5DE7\u5F03\u5229\uFF0C\u76D7\u8D3C\u65E0\u6709\u3002\u6B64\u4E09\u8005\uFF0C\u4EE5\u4E3A\u6587\u4E0D\u8DB3\uFF0C\u6545\u4EE4\u6709\u6240\u5C5E\uFF0C\u89C1\uFF08xi\xE0n\uFF09\u7D20\u62B1\u6734\uFF0C\u5C11\u79C1\u5BE1\u6B32\u3002',
    iconPlacement: 'start',
    title: '\u7B2C\u5341\u4E5D\u7AE0',
    key: '2',
  },

  {
    children:
      '\u7EDD\u5B66\u65E0\u5FE7\u3002\u552F\u4E4B\u4E0E\u963F\uFF08\u0113\uFF09\uFF0C\u76F8\u53BB\u51E0\u4F55\uFF1F\u5584\u4E4B\u4E0E\u6076\uFF0C\u76F8\u53BB\u82E5\u4F55\uFF1F\u4EBA\u4E4B\u6240\u754F\uFF0C\u4E0D\u53EF\u4E0D\u754F\u3002\u8352\u516E\u5176\u672A\u592E\u54C9\uFF01\u4F17\u4EBA\u7199\u7199\uFF0C\u5982\u4EAB\u592A\u7262\uFF0C\u5982\u6625\u767B\u53F0\u3002\u6211\u72EC\u6CCA\u516E\u5176\u672A\u5146\uFF0C\u5982\u5A74\u513F\u4E4B\u672A\u5B69\u3002\u50AB\u50AB\uFF08l\u011Bi\uFF09\u516E\u82E5\u65E0\u6240\u5F52\u3002\u4F17\u4EBA\u7686\u6709\u4F59\uFF0C\u800C\u6211\u72EC\u82E5\u9057\u3002\u6211\u611A\u4EBA\u4E4B\u5FC3\u4E5F\u54C9\uFF01\u6C8C\u6C8C\u516E\uFF01\u4FD7\u4EBA\u662D\u662D\uFF0C\u6211\u72EC\u660F\u660F\uFF1B\u4FD7\u4EBA\u5BDF\u5BDF\uFF0C\u6211\u72EC\u95F7\u95F7\u3002\u6FB9\uFF08d\xE0n\uFF09\u516E\u5176\u82E5\u6D77\uFF0C\u98C2\uFF08li\xF9\uFF09\u516E\u82E5\u65E0\u6B62\u3002\u4F17\u4EBA\u7686\u6709\u4EE5\uFF0C\u800C\u6211\u72EC\u987D\u4F3C\u9119\u3002\u6211\u72EC\u5F02\u4E8E\u4EBA\uFF0C\u800C\u8D35\u98DF(s\xEC)\u6BCD\u3002',
    title: '\u7B2C\u4E8C\u5341\u7AE0',
    key: '3',
  },
];
const App: React.FC = () => {
  return (
    <div>
      <CollapseGroup
        collapseProps={{
          iconPlacement: 'end',
          extra: '\u300A\u9053\u5FB7\u7ECF\u300B',
        }}
        items={items}
      />
    </div>
  );
};

export default App;
`},29618:function(e,n){n.Z=`import {
  type CollapseGroupItem,
  CollapseGroup,
  Icons,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const items: CollapseGroupItem[] = [
  {
    children:
      '\u53E4\u4E4B\u5584\u4E3A\u58EB\u8005\uFF0C\u5FAE\u5999\u7384\u901A\uFF0C\u6DF1\u4E0D\u53EF\u8BC6\u3002\u592B\u552F\u4E0D\u53EF\u8BC6\uFF0C\u6545\u5F3A(qi\u01CEng)\u4E3A\u4E4B\u5BB9\u3002\u8C6B\u7109\u82E5\u51AC\u6D89\u5DDD\uFF0C\u72B9\u516E\u82E5\u754F\u56DB\u90BB\uFF0C\u4FE8\u516E\u5176\u82E5\u5BB9\uFF0C\u6DA3\u516E\u82E5\u51B0\u4E4B\u5C06\u91CA\uFF0C\u6566\u516E\u5176\u82E5\u6734\uFF0C\u65F7\u516E\u5176\u82E5\u8C37\uFF0C\u6DF7\u516E\u5176\u82E5\u6D4A\u3002\u5B70\u80FD\u6D4A\u4EE5\u9759\u4E4B\u5F90\u6E05\uFF1F\u5B70\u80FD\u5B89\u4EE5\u4E45\u52A8\u4E4B\u5F90\u751F\uFF1F\u4FDD\u6B64\u9053\u8005\u4E0D\u6B32\u76C8\uFF0C\u592B\u552F\u4E0D\u76C8\uFF0C\u6545\u80FD\u853D\u4E0D\u65B0\u6210\u3002',
    extra: '\u516C\u5171icon',
    title: '\u7B2C\u5341\u4E94\u7AE0',
    key: '1',
  },
  {
    icon: (active) => (
      <Icon
        className={\`t-collapse__icon \${
          active ? 't-collapse__icon--active' : ''
        }\`}
      >
        <Icons.CircleSuccess></Icons.CircleSuccess>
      </Icon>
    ),
    children:
      '\u81F4\u865A\u6781\uFF0C\u5B88\u9759\u7B03\uFF08d\u01D4\uFF09\uFF0C\u4E07\u7269\u5E76\u4F5C\uFF0C\u543E\u4EE5\u89C2\u590D\u3002\u592B\u7269\u82B8\u82B8\uFF0C\u5404\u590D\u5F52\u5176\u6839\u3002\u5F52\u6839\u66F0\u9759\uFF0C\u662F\u8C13\u590D\u547D\u3002\u590D\u547D\u66F0\u5E38\uFF0C\u77E5\u5E38\u66F0\u660E\uFF0C\u4E0D\u77E5\u5E38\uFF0C\u5984\u4F5C\uFF0C\u51F6\u3002\u77E5\u5E38\u5BB9\uFF0C\u5BB9\u4E43\u516C\uFF0C\u516C\u4E43\u738B\uFF08w\xE0ng\uFF09\uFF0C\u738B\uFF08w\xE0ng\uFF09\u4E43\u5929\uFF0C\u5929\u4E43\u9053\uFF0C\u9053\u4E43\u4E45\uFF0C\u6CA1\uFF08m\xF2\uFF09\u8EAB\u4E0D\u6B86',
    extra: '\u72EC\u7ACBicon',
    title: '\u7B2C\u5341\u516D\u7AE0',
    key: '2',
  },

  {
    children:
      '\u592A\u4E0A\uFF0C\u4E0B\u77E5\u6709\u4E4B\u3002\u5176\u6B21\uFF0C\u4EB2\u800C\u8A89\u4E4B\u3002\u5176\u6B21\uFF0C\u754F\u4E4B\u3002\u5176\u6B21\uFF0C\u4FAE\u4E4B\u3002\u4FE1\u4E0D\u8DB3\u7109\uFF0C\u6709\u4E0D\u4FE1\u7109\u3002\u60A0\u516E\u5176\u8D35\u8A00\u3002\u529F\u6210\u4E8B\u9042\uFF0C\u767E\u59D3\u7686\u8C13\u6211\u81EA\u7136',
    extra: '\u65E0icon',
    title: '\u7B2C\u5341\u4E03\u7AE0',
    icon: null,
    key: '3',
  },
];
const App: React.FC = () => {
  return (
    <div>
      <CollapseGroup
        collapseProps={{
          icon: (active) => (
            <Icon
              className={\`t-collapse__icon \${
                active ? 't-collapse__icon--active' : ''
              }\`}
            >
              <Icons.CircleInfoFill></Icons.CircleInfoFill>
            </Icon>
          ),
        }}
        items={items}
      />
    </div>
  );
};

export default App;
`},44984:function(e,n){n.Z=`import { Collapse, Divider } from '@tool-pack/react-ui';
import React, { useLayoutEffect } from 'react';

const App: React.FC = () => {
  useLayoutEffect(() => {
    // debugger;
  }, []);
  return (
    <div>
      <Divider attrs={{ style: { margin: '10px 0' } }} />

      <Collapse title={'\u7B2C\u5341\u4E09\u7AE0'} expanded>
        \u5BA0\u8FB1\u82E5\u60CA\uFF0C\u8D35\u5927\u60A3\u82E5\u8EAB\u3002\u4F55\u8C13\u5BA0\u8FB1\u82E5\u60CA\uFF1F\u5BA0\u4E3A\u4E0B\uFF0C\u5F97\u4E4B\u82E5\u60CA\uFF0C\u5931\u4E4B\u82E5\u60CA\uFF0C\u662F\u8C13\u5BA0\u8FB1\u82E5\u60CA\u3002\u4F55\u8C13\u8D35\u5927\u60A3\u82E5\u8EAB\uFF1F\u543E\u6240\u4EE5\u6709\u5927\u60A3\u8005\uFF0C\u4E3A\u543E\u6709\u8EAB\uFF0C\u53CA\u543E\u65E0\u8EAB\uFF0C\u543E\u6709\u4F55\u60A3\uFF01\u6545\u8D35\u4EE5\u8EAB\u4E3A\u5929\u4E0B\uFF0C\u82E5\u53EF\u5BC4\u5929\u4E0B\uFF1B\u7231\u4EE5\u8EAB\u4E3A\u5929\u4E0B\uFF0C\u82E5\u53EF\u6258\u5929\u4E0B\u3002
      </Collapse>

      <Divider attrs={{ style: { margin: '10px 0' } }} />

      <Collapse title={'\u7B2C\u5341\u56DB\u7AE0'} size="small" disabled>
        \u89C6\u4E4B\u4E0D\u89C1\u540D\u66F0\u5937\uFF0C\u542C\u4E4B\u4E0D\u95FB\u540D\u66F0\u5E0C\uFF0C\u640F\u4E4B\u4E0D\u5F97\u540D\u66F0\u5FAE\u3002\u6B64\u4E09\u8005\u4E0D\u53EF\u81F4\u8BD8\uFF08ji\xE9\uFF09\uFF0C\u6545\u6DF7\uFF08h\xF9n\uFF09\u800C\u4E3A\u4E00\u3002\u5176\u4E0A\u4E0D\u76A6\uFF08ji\u01CEo\u768E\uFF09\uFF0C\u5176\u4E0B\u4E0D\u6627\u3002\u7EF3\u7EF3(m\u01D0n
        m\u01D0n)\u4E0D\u53EF\u540D\uFF0C\u590D\u5F52\u4E8E\u65E0\u7269\uFF0C\u662F\u8C13\u65E0\u72B6\u4E4B\u72B6\uFF0C\u65E0\u7269\u4E4B\u8C61\u3002\u662F\u8C13\u60DA\u604D\u3002\u8FCE\u4E4B\u4E0D\u89C1\u5176\u9996\uFF0C\u968F\u4E4B\u4E0D\u89C1\u5176\u540E\u3002\u6267\u53E4\u4E4B\u9053\uFF0C\u4EE5\u5FA1\u4ECA\u4E4B\u6709\uFF0C\u80FD\u77E5\u53E4\u59CB\uFF0C\u662F\u8C13\u9053\u7EAA\u3002
      </Collapse>

      <Divider attrs={{ style: { margin: '10px 0' } }} />

      <Collapse
        attrs={{
          style: {
            border: '1px solid gray',
            borderRadius: '8px',
            padding: '0 16px',
          },
        }}
        iconPlacement="end"
        title={'\u7B2C\u5341\u4E94\u7AE0'}
        size="large"
      >
        <div style={{ paddingBottom: '20px' }}>
          \u53E4\u4E4B\u5584\u4E3A\u58EB\u8005\uFF0C\u5FAE\u5999\u7384\u901A\uFF0C\u6DF1\u4E0D\u53EF\u8BC6\u3002\u592B\u552F\u4E0D\u53EF\u8BC6\uFF0C\u6545\u5F3A(qi\u01CEng)\u4E3A\u4E4B\u5BB9\u3002\u8C6B\u7109\u82E5\u51AC\u6D89\u5DDD\uFF0C\u72B9\u516E\u82E5\u754F\u56DB\u90BB\uFF0C\u4FE8\u516E\u5176\u82E5\u5BB9\uFF0C\u6DA3\u516E\u82E5\u51B0\u4E4B\u5C06\u91CA\uFF0C\u6566\u516E\u5176\u82E5\u6734\uFF0C\u65F7\u516E\u5176\u82E5\u8C37\uFF0C\u6DF7\u516E\u5176\u82E5\u6D4A\u3002\u5B70\u80FD\u6D4A\u4EE5\u9759\u4E4B\u5F90\u6E05\uFF1F\u5B70\u80FD\u5B89\u4EE5\u4E45\u52A8\u4E4B\u5F90\u751F\uFF1F\u4FDD\u6B64\u9053\u8005\u4E0D\u6B32\u76C8\uFF0C\u592B\u552F\u4E0D\u76C8\uFF0C\u6545\u80FD\u853D\u4E0D\u65B0\u6210\u3002
        </div>
      </Collapse>

      <Divider attrs={{ style: { margin: '10px 0' } }} />
    </div>
  );
};

export default App;
`},109:function(e,n){n.Z=`import { type CollapseGroupItem, CollapseGroup } from '@tool-pack/react-ui';
import React from 'react';

const nest: CollapseGroupItem[] = [
  {
    children:
      '\u5E0C\u8A00\u81EA\u7136\u3002\u6545\u98D8\u98CE\u4E0D\u7EC8\u671D\uFF08zh\u0101o\uFF09\uFF0C\u9AA4\u96E8\u4E0D\u7EC8\u65E5\u3002\u5B70\u4E3A\u6B64\u8005\uFF1F\u5929\u5730\u3002\u5929\u5730\u5C1A\u4E0D\u80FD\u4E45\uFF0C\u800C\u51B5\u4E8E\u4EBA\u4E4E\uFF1F\u6545\u4ECE\u4E8B\u4E8E\u9053\u8005\uFF0C\u9053\u8005\u540C\u4E8E\u9053\uFF0C\u5FB7\u8005\u540C\u4E8E\u5FB7\uFF0C\u5931\u8005\u540C\u4E8E\u5931\u3002\u540C\u4E8E\u9053\u8005\uFF0C\u9053\u4EA6\u4E50\u5F97\u4E4B\uFF1B\u540C\u4E8E\u5FB7\u8005\uFF0C\u5FB7\u4EA6\u4E50\u5F97\u4E4B\uFF1B\u540C\u4E8E\u5931\u8005\uFF0C\u5931\u4EA6\u4E50\u5F97\u4E4B\u3002\u4FE1\u4E0D\u8DB3\u7109\uFF0C\u6709\u4E0D\u4FE1\u7109\u3002',
    title: '\u7B2C\u4E8C\u5341\u4E09\u7AE0',
    key: '4',
  },
  {
    children:
      '\u4F01\u8005\u4E0D\u7ACB\uFF0C\u8DE8\u8005\u4E0D\u884C\uFF0C\u81EA\u89C1\uFF08xi\xE0n\uFF09\u8005\u4E0D\u660E\uFF0C\u81EA\u662F\u8005\u4E0D\u5F70\uFF0C\u81EA\u4F10\u8005\u65E0\u529F\uFF0C\u81EA\u77DC\u8005\u4E0D\u957F\u3002\u5176\u5728\u9053\u4E5F\uFF0C\u66F0\u4F59\u98DF\u8D58\uFF08zhu\xEC\uFF09\u884C\u3002\u7269\u6216\u6076\uFF08w\xF9\uFF09\u4E4B\uFF0C\u6545\u6709\u9053\u8005\u4E0D\u5904\uFF08ch\u01D4\uFF09\u3002',
    title: '\u7B2C\u4E8C\u5341\u56DB\u7AE0',
    key: '5',
  },
  {
    children:
      '\u6709\u7269\u6DF7\uFF08h\xF9n\uFF09\u6210\uFF0C\u5148\u5929\u5730\u751F\u3002\u5BC2\u516E\u5BE5\u516E\uFF0C\u72EC\u7ACB\u4E0D\u6539\uFF0C\u5468\u884C\u800C\u4E0D\u6B86\uFF0C\u53EF\u4EE5\u4E3A\u5929\u4E0B\u6BCD\u3002\u543E\u4E0D\u77E5\u5176\u540D\uFF0C\u5B57\u4E4B\u66F0\u9053\uFF0C\u5F3A(qi\u01CEng)\u4E3A\u4E4B\u540D\u66F0\u5927\u3002\u5927\u66F0\u901D\uFF0C\u901D\u66F0\u8FDC\uFF0C\u8FDC\u66F0\u53CD\u3002\u6545\u9053\u5927\uFF0C\u5929\u5927\uFF0C\u5730\u5927\uFF0C\u738B\u4EA6\u5927\u3002\u57DF\u4E2D\u6709\u56DB\u5927\uFF0C\u800C\u738B\u5C45\u5176\u4E00\u7109\u3002\u4EBA\u6CD5\u5730\uFF0C\u5730\u6CD5\u5929\uFF0C\u5929\u6CD5\u9053\uFF0C\u9053\u6CD5\u81EA\u7136\u3002',
    title: '\u7B2C\u4E8C\u5341\u4E94\u7AE0',
    key: '6',
  },
];
const items: CollapseGroupItem[] = [
  {
    children:
      '\u5B54\u5FB7\u4E4B\u5BB9\uFF0C\u60DF\u9053\u662F\u4ECE\u3002\u9053\u4E4B\u4E3A\u7269\uFF0C\u60DF\u604D\u60DF\u60DA\u3002\u60DA\u516E\u604D\u516E\uFF0C\u5176\u4E2D\u6709\u8C61\uFF1B\u604D\u516E\u60DA\u516E\uFF0C\u5176\u4E2D\u6709\u7269\u3002\u7A88\uFF08y\u01CEo\uFF09\u516E\u51A5\u516E\uFF0C\u5176\u4E2D\u6709\u7CBE\uFF1B\u5176\u7CBE\u751A\u771F\uFF0C\u5176\u4E2D\u6709\u4FE1\u3002\u81EA\u53E4\u53CA\u4ECA\uFF0C\u5176\u540D\u4E0D\u53BB\uFF0C\u4EE5\u9605\u4F17\u752B\u3002\u543E\u4F55\u4EE5\u77E5\u4F17\u752B\u4E4B\u72B6\u54C9\uFF1F\u4EE5\u6B64\u3002',
    title: '\u7B2C\u4E8C\u5341\u4E00\u7AE0',
    key: '1',
  },
  {
    children:
      '\u66F2\u5219\u5168\uFF0C\u6789\u5219\u76F4\uFF0C\u6D3C\u5219\u76C8\uFF0C\u655D\u5219\u65B0\uFF0C\u5C11\u5219\u5F97\uFF0C\u591A\u5219\u60D1\u3002\u662F\u4EE5\u5723\u4EBA\u62B1\u4E00\uFF0C\u4E3A\u5929\u4E0B\u5F0F\u3002\u4E0D\u81EA\u89C1\uFF08xi\xE0n\uFF09\u6545\u660E\uFF0C\u4E0D\u81EA\u662F\u6545\u5F70\uFF0C\u4E0D\u81EA\u4F10\u6545\u6709\u529F\uFF0C\u4E0D\u81EA\u77DC\u6545\u957F\u3002\u592B\u552F\u4E0D\u4E89\uFF0C\u6545\u5929\u4E0B\u83AB\u80FD\u4E0E\u4E4B\u4E89\u3002\u53E4\u4E4B\u6240\u8C13\u66F2\u5219\u5168\u8005\uFF0C\u5C82\u865A\u8A00\u54C9\uFF01\u8BDA\u5168\u800C\u5F52\u4E4B\u3002',
    title: '\u7B2C\u4E8C\u5341\u4E8C\u7AE0',
    key: '2',
  },

  {
    children: <CollapseGroup collapseProps={{ expanded: true }} items={nest} />,
    title: '\u7B2C\u4E8C\u5341\u4E09\u81F3\u4E8C\u5341\u4E94\u7AE0',
    expanded: true,
    extra: '\u5D4C\u5957',
    key: '3',
  },
];
const App: React.FC = () => {
  return (
    <div>
      <CollapseGroup items={items} />
    </div>
  );
};

export default App;
`},44054:function(e,n){n.Z=`.root {
  $r: 't-collapse';
  :global {
    .#{$r} {
      padding: 0 !important;
      border: 1px solid #a8a8a8 !important;
      border-radius: 8px;
    }
    .#{$r}__header {
      padding: 0 var(--t-collapse-content-padding) !important;
      border-bottom: 1px solid transparent;
      transition: border-bottom-color 0.45s linear;
    }
    .#{$r}__content-inner {
      padding: var(--t-collapse-content-padding) !important;
    }
    .#{$r}--active {
      .#{$r}__header {
        border-bottom-color: #a8a8a8;
      }
    }
  }
}
`},34636:function(e,n){n.Z=`import { type CollapseGroupItem, CollapseGroup } from '@tool-pack/react-ui';
import styles from './size.module.scss';
import React from 'react';

const items: CollapseGroupItem[] = [
  {
    children:
      '\u5C06\u6B32\u53D6\u5929\u4E0B\u800C\u4E3A\u4E4B\uFF0C\u543E\u89C1\u5176\u4E0D\u5F97\u5DF2\u3002\u5929\u4E0B\u795E\u5668\uFF0C\u4E0D\u53EF\u4E3A\u4E5F\u3002\u4E3A\u8005\u8D25\u4E4B\uFF0C\u6267\u8005\u5931\u4E4B\u3002\u6545\u7269\u6216\u884C\u6216\u968F\uFF0C\u6216\u6B54\uFF08x\u016B\uFF09\u6216\u5439\uFF0C\u6216\u5F3A\u6216\u7FB8\uFF08l\xE9i\uFF09\uFF0C\u6216\u632B\u6216\u96B3\uFF08hu\u012B\uFF09\u3002\u662F\u4EE5\u5723\u4EBA\u53BB\u751A\uFF0C\u53BB\u5962\uFF0C\u53BB\u6CF0\u3002',
    title: '\u7B2C\u4E8C\u5341\u4E5D\u7AE0',
    size: 'small',
    key: '1',
  },
  {
    children:
      '\u4EE5\u9053\u4F50\u4EBA\u4E3B\u8005\uFF0C\u4E0D\u4EE5\u5175\u5F3A\u5929\u4E0B\uFF0C\u5176\u4E8B\u597D\uFF08h\xE0o\uFF09\u8FD8\u3002\u5E08\u4E4B\u6240\u5904\uFF0C\u8346\u68D8\u751F\u7109\u3002\u5927\u519B\u4E4B\u540E\uFF0C\u5FC5\u6709\u51F6\u5E74\u3002\u5584\u6709\u679C\u800C\u5DF2\uFF0C\u4E0D\u6562\u4EE5\u53D6\u5F3A\u3002\u679C\u800C\u52FF\u77DC\uFF0C\u679C\u800C\u52FF\u4F10\uFF0C\u679C\u800C\u52FF\u9A84\uFF0C\u679C\u800C\u4E0D\u5F97\u5DF2\uFF0C\u679C\u800C\u52FF\u5F3A\u3002\u7269\u58EE\u5219\u8001\uFF0C\u662F\u8C13\u4E0D\u9053\uFF0C\u4E0D\u9053\u65E9\u5DF2\u3002',
    size: 'medium',
    title: '\u7B2C\u4E09\u5341\u7AE0',
    key: '2',
  },

  {
    children:
      '\u592B\u4F73\u5175\u8005\uFF0C\u4E0D\u7965\u4E4B\u5668\u3002\u7269\u6216\u6076\uFF08w\xF9\uFF09\u4E4B\uFF0C\u6545\u6709\u9053\u8005\u4E0D\u5904\uFF08ch\u01D4\uFF09\u3002\u541B\u5B50\u5C45\u5219\u8D35\u5DE6\uFF0C\u7528\u5175\u5219\u8D35\u53F3\u3002\u5175\u8005\uFF0C\u4E0D\u7965\u4E4B\u5668\uFF0C\u975E\u541B\u5B50\u4E4B\u5668\u3002\u4E0D\u5F97\u5DF2\u800C\u7528\u4E4B\uFF0C\u606C\u6DE1\u4E3A\u4E0A\uFF0C\u80DC\u800C\u4E0D\u7F8E\u3002\u800C\u7F8E\u4E4B\u8005\uFF0C\u662F\u4E50(y\xE0o)\u6740\u4EBA\u3002\u592B\u4E50(y\xE0o)\u6740\u4EBA\u8005\uFF0C\u5219\u4E0D\u53EF\u4EE5\u5F97\u5FD7\u4E8E\u5929\u4E0B\u77E3\u3002\u5409\u4E8B\u5C1A\u5DE6\uFF0C\u51F6\u4E8B\u5C1A\u53F3\u3002\u504F\u5C06\u519B\u5C45\u5DE6\uFF0C\u4E0A\u5C06\u519B\u5C45\u53F3\uFF0C\u8A00\u4EE5\u4E27\uFF08s\u0101ng\uFF09\u793C\u5904\u4E4B\u3002\u6740\u4EBA\u4E4B\u4F17\uFF0C\u4EE5\u54C0\u60B2\u6CE3\u4E4B\uFF0C\u6218\u80DC\uFF0C\u4EE5\u4E27\u793C\u5904\u4E4B\u3002',
    title: '\u7B2C\u4E09\u5341\u4E00\u7AE0',
    size: 'large',
    key: '3',
  },
];
const App: React.FC = () => {
  return (
    <div className={styles['root']}>
      <CollapseGroup items={items} accordion />
    </div>
  );
};

export default App;
`},20990:function(e,n){n.Z=`import { DatePicker } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState(() => new Date());
  return (
    <>
      <div>{value.toString()}</div>
      <DatePicker onChange={setValue} value={value} />
    </>
  );
};

export default App;
`},73688:function(e,n){n.Z=`import { DatePicker } from '@tool-pack/react-ui';
import React from 'react';

const now = new Date();
const arr = [now.getFullYear(), now.getMonth()] as const;
const date = now.getDate();

const prev = new Date(...arr, date - 7).getTime();
const next = new Date(...arr, date + 7).getTime();

const App: React.FC = () => {
  return (
    <>
      <h3>7 \u5929\u5185\u4E0D\u53EF\u9009</h3>
      <DatePicker dateDisabled={dateDisabled} />
      <br />
      <DatePicker dateDisabled={dateDisabled} range />
    </>
  );
  function dateDisabled(date: Date): boolean {
    const time = date.getTime();
    return prev <= time && time <= next && !isSameDate(now, date);
  }
};

function isSameDate(date1: Date, date2: Date): boolean {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

export default App;
`},3026:function(e,n){n.Z=`import { DatePicker } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return <DatePicker disabled />;
};

export default App;
`},7234:function(e,n){n.Z=`import { DatePicker } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState(() => new Date());
  return (
    <>
      <div>{value.toString()}</div>
      <DatePicker
        format="yyyy\u5E74MM\u6708dd\u65E5 hh\u65F6mm\u5206ss\u79D2"
        onChange={setValue}
        value={value}
      />
    </>
  );
};

export default App;
`},29020:function(e,n){n.Z=`import { DatePicker, Icons } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return <DatePicker icon={<Icons.Selected />} />;
};

export default App;
`},22940:function(e,n){n.Z=`import { DatePicker, Select, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const Types = ['year', 'month', 'datetime', 'date', 'time'] as const;
const options = Types.map((t) => ({ label: t, value: t }));

const App: React.FC = () => {
  const [type, setType] = useState<(typeof Types)[number]>('date');
  return (
    <Space>
      <Select onChange={setType} options={options} value={type} />
      <DatePicker type={type} range />
    </Space>
  );
};

export default App;
`},42323:function(e,n){n.Z=`import { DatePicker } from '@tool-pack/react-ui';
import React from 'react';

const now = new Date();
const arr = [now.getFullYear(), now.getMonth()] as const;
const date = now.getDate();

const yesterday = new Date(...arr, date - 1);
const tomorrow = new Date(...arr, date + 1);

const App: React.FC = () => {
  return (
    <>
      <DatePicker shortcuts={[{ value: new Date(), label: '\u4ECA\u5929' }]} />
      <br />
      <DatePicker
        shortcuts={[
          {
            value: [yesterday, now],
            label: '\u6628\u5929\u5230\u4ECA\u5929',
          },
          {
            value: [now, tomorrow],
            label: '\u4ECA\u5929\u5230\u660E\u5929',
          },
          {
            value: [yesterday, tomorrow],
            label: '\u6628\u5929\u5230\u660E\u5929',
          },
        ]}
        range
      />
    </>
  );
};

export default App;
`},48061:function(e,n){n.Z=`import { DatePicker, Select, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const Types = ['year', 'month', 'datetime', 'date', 'time'] as const;
const options = Types.map((t) => ({ label: t, value: t }));

const App: React.FC = () => {
  const [type, setType] = useState<(typeof Types)[number]>('date');
  return (
    <Space>
      <Select onChange={setType} options={options} value={type} />
      <DatePicker type={type} />
    </Space>
  );
};

export default App;
`},80976:function(e,n){n.Z=`import { Button, Dialog } from '@tool-pack/react-ui';
import React, { useReducer, useState } from 'react';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((l) => !l, false);
  const [value, setValue] = useState('');

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={setVisible} type="primary">
        {visible ? '\u5173\u95ED' : '\u6253\u5F00'}dialog
      </Button>
      <Dialog
        bodyAttrs={{ style: { top: '100px' } }}
        onClose={setVisible}
        visible={visible}
        footer="footer"
        header="title"
      >
        <div>\u968F\u4FBF\u8BF4\u8BF4</div>
        <textarea
          style={{
            boxSizing: 'border-box',
            marginTop: '10px',
            display: 'block',
            width: '100%',
          }}
          onChange={(e) => setValue(e.target.value)}
          placeholder="\u8F93\u5165..."
          value={value}
        />
      </Dialog>
    </div>
  );
};

export default App;
`},12588:function(e,n){n.Z=`import {
  Button,
  Dialog,
  Footer,
  Header,
  Layout,
  Aside,
  Main,
} from '@tool-pack/react-ui';
import React, { useCallback, useState, useMemo } from 'react';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const close = useCallback(() => setVisible(false), []);
  const children = useMemo(() => {
    return (
      <Layout style={{ background: '#efefef', textAlign: 'center' }} vertical>
        <Header style={{ background: 'pink' }} className="header">
          header
        </Header>
        <Layout>
          <Aside style={{ width: '200px' }}>aside</Aside>
          <Main style={{ background: 'blue' }}>main</Main>
        </Layout>
        <Layout vertical>
          <Aside style={{ background: 'lime' }}>aside</Aside>
          <Main>main</Main>
        </Layout>
        <Footer style={{ background: 'pink' }}>footer</Footer>
      </Layout>
    );
  }, []);
  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={() => setVisible(true)} type="primary">
        {visible ? '\u5173\u95ED' : '\u6253\u5F00'}dialog
      </Button>
      <Dialog
        footer={
          <>
            <Button onClick={close} plain="dashed" type="info">
              cancel
            </Button>
            <Button
              style={{ marginLeft: '10px' }}
              onClick={close}
              type="primary"
            >
              confirm
            </Button>
          </>
        }
        bodyAttrs={{ style: { top: '20px' } }}
        visible={visible}
        onClose={close}
        header="title"
        centered
        center
      >
        {children}
      </Dialog>
    </div>
  );
};

export default App;
`},54065:function(e,n){n.Z=`import {
  Button,
  Dialog,
  Footer,
  Header,
  Layout,
  Aside,
  Main,
} from '@tool-pack/react-ui';
import React, { useCallback, useState, useMemo } from 'react';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const close = useCallback(() => setVisible(false), []);
  const children = useMemo(() => {
    return (
      <Layout style={{ background: '#efefef', textAlign: 'center' }} vertical>
        <Header style={{ background: 'pink' }} className="header">
          header
        </Header>
        <Layout>
          <Aside style={{ width: '200px' }}>aside</Aside>
          <Main style={{ background: 'blue' }}>main</Main>
        </Layout>
        <Layout vertical>
          <Aside style={{ background: 'lime' }}>aside</Aside>
          <Main>main</Main>
        </Layout>
        <Footer style={{ background: 'pink' }}>footer</Footer>
      </Layout>
    );
  }, []);
  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={() => setVisible(true)} type="primary">
        {visible ? '\u5173\u95ED' : '\u6253\u5F00'}dialog
      </Button>
      <Dialog
        footer={
          <>
            <Button onClick={close} plain="dashed" type="info">
              cancel
            </Button>
            <Button
              style={{ marginLeft: '10px' }}
              onClick={close}
              type="primary"
            >
              confirm
            </Button>
          </>
        }
        bodyAttrs={{ style: { top: '20px' } }}
        visible={visible}
        onClose={close}
        header="title"
        centered
      >
        {children}
      </Dialog>
    </div>
  );
};

export default App;
`},2314:function(e,n){n.Z=`import {
  Button,
  Dialog,
  Footer,
  Header,
  Layout,
  Aside,
  Main,
} from '@tool-pack/react-ui';
import React, { useCallback, useState, useMemo } from 'react';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const close = useCallback(() => setVisible(false), []);
  const children = useMemo(() => {
    return (
      <Layout style={{ background: '#efefef', textAlign: 'center' }} vertical>
        <Header style={{ background: 'pink' }} className="header">
          header
        </Header>
        <Layout>
          <Aside style={{ width: '200px' }}>aside</Aside>
          <Main style={{ background: 'blue' }}>main</Main>
        </Layout>
        <Layout vertical>
          <Aside style={{ background: 'lime' }}>aside</Aside>
          <Main>main</Main>
        </Layout>
        <Footer style={{ background: 'pink' }}>footer</Footer>
      </Layout>
    );
  }, []);
  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={() => setVisible(true)} type="primary">
        {visible ? '\u5173\u95ED' : '\u6253\u5F00'}dialog
      </Button>
      <Dialog
        footer={
          <>
            <Button onClick={close} plain="dashed" type="info">
              cancel
            </Button>
            <Button
              style={{ marginLeft: '10px' }}
              onClick={close}
              type="primary"
            >
              confirm
            </Button>
          </>
        }
        bodyAttrs={{ style: { top: '20px' } }}
        visible={visible}
        closeOnClickMask
        onClose={close}
        header="title"
        centered
        center
        esc
      >
        {children}
      </Dialog>
    </div>
  );
};

export default App;
`},73683:function(e,n){n.Z=`import { Divider } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      Are you ok?
      <Divider />
      I'm fine, thank you. And you?
    </>
  );
};

export default App;
`},98051:function(e,n){n.Z=`import { Divider, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space vertical fill>
      <p>
        Are you ok? <br />
        I'm fine, thank you. And you?
      </p>
      <Divider placement="left">\u4E00\u6761\u534E\u4E3D\u7684\u5206\u5272\u7EBF</Divider>
      <p>
        What's your name? <br />
        What? <br />
      </p>
      <Divider lineStyle="dashed" lineColor="blue">
        \u4E00\u6761\u534E\u4E3D\u7684\u5206\u5272\u7EBF
      </Divider>
      <p>
        What's your name? <br />
        Tony
      </p>
      <Divider
        placement="center"
        lineStyle="dotted"
        lineWidth="10px"
        lineColor="red"
      >
        <div style={{ color: 'blue' }}>\u4E00\u6761\u534E\u4E3D\u7684\u5206\u5272\u7EBF</div>
      </Divider>
      <p>
        **** you, Tony. <br />
        What's your name?
      </p>
      <Divider placement="right" lineColor="lime">
        \u4E00\u6761\u534E\u4E3D\u7684\u5206\u5272\u7EBF
      </Divider>
      <p>
        Ezekiel. <br />
        **** you~
      </p>
    </Space>
  );
};

export default App;
`},84659:function(e,n){n.Z=`import { Divider, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space vertical fill>
      <p>
        Are you ok? <br />
        I'm fine, thank you. And you?
      </p>
      <Divider placement="left">\u4E00\u6761\u534E\u4E3D\u7684\u5206\u5272\u7EBF</Divider>
      <p>
        What's your name? <br />
        What? <br />
      </p>
      <Divider>\u4E00\u6761\u534E\u4E3D\u7684\u5206\u5272\u7EBF</Divider>
      <p>
        What's your name? <br />
        Tony
      </p>
      <Divider placement="center">\u4E00\u6761\u534E\u4E3D\u7684\u5206\u5272\u7EBF</Divider>
      <p>
        **** you, Tony. <br />
        What's your name?
      </p>
      <Divider placement="right">\u4E00\u6761\u534E\u4E3D\u7684\u5206\u5272\u7EBF</Divider>
      <p>
        Ezekiel. <br />
        **** you~
      </p>
    </Space>
  );
};

export default App;
`},64785:function(e,n){n.Z=`import { Divider, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space style={{ alignItems: 'initial' }} vertical>
      <div>
        Are you ok?
        <Divider lineColor="red" vertical />
        I'm fine, thank you. And you?
      </div>
      <Space separator={<Divider lineColor="blue" vertical />}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
        <div>E</div>
      </Space>
      <Space separator={<Divider lineColor="blue" vertical />}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
        <div>E</div>
      </Space>
    </Space>
  );
};

export default App;
`},30761:function(e,n){n.Z=`.root {
  :global {
    .main {
      display: flex;
      margin-top: 1rem;
    }
    .t-draggable {
      flex: 1;
    }
    .draggable-item {
      padding: 0 0.5rem;
      border: 1px solid #e6e6e6;
      background: #fff1d7;
      line-height: 32px;
    }
    .data {
      padding: 0 20px;
      white-space: pre-wrap;
    }
  }
}
`},98239:function(e,n){n.Z=`import { ButtonGroup, Draggable, Button } from '@tool-pack/react-ui';
import styles from './basic.module.scss';
import React from 'react';

const App: React.FC = () => {
  const [state, setState] = React.useState<{ name: string; id: number }[]>([
    { name: 'John', id: 1 },
    { name: 'Joao', id: 2 },
    { name: 'Jean', id: 3 },
    { name: 'Gerard', id: 4 },
  ]);
  return (
    <div className={styles['root']}>
      <ButtonGroup>
        <Button
          onClick={() => {
            const id = state.length + 1;
            setState([...state, { name: 'anyone', id }]);
          }}
          type="primary"
        >
          \u6DFB\u52A0
        </Button>
        <Button onClick={() => setState(state.slice(0, -1))} type="success">
          \u5220\u51CF
        </Button>
      </ButtonGroup>
      <div className="main">
        <Draggable onChange={setState} list={state}>
          {state.map((item, index) => (
            <div className="draggable-item" key={item.id}>
              <span>{index + 1}.</span> <span>{item.name}</span>{' '}
              <span>{item.id}</span>
            </div>
          ))}
        </Draggable>
        <div className="data">
          [
          {state.map((it) => (
            <div key={it.id}>{JSON.stringify(it)}</div>
          ))}
          ]
        </div>
      </div>
    </div>
  );
};

export default App;
`},39330:function(e,n){n.Z=`.root {
  :global {
    .main {
      display: flex;
      margin-top: 1rem;
    }
    .t-draggable {
      flex: 1;
    }
    .draggable-item {
      padding: 0 0.5rem;
      border: 1px solid #e6e6e6;
      background: #fff1d7;
      line-height: 32px;
      &[draggable='false'] {
        background: #f6f4f0;
      }
    }
    .data {
      padding: 0 20px;
      white-space: pre-wrap;
    }
  }
}
`},34534:function(e,n){n.Z=`import { Draggable } from '@tool-pack/react-ui';
import styles from './draggable.module.scss';
import React from 'react';

const App: React.FC = () => {
  const [state, setState] = React.useState<{ name: string; id: number }[]>([
    { name: 'John', id: 1 },
    { name: 'Joao', id: 2 },
    { name: 'Jean', id: 3 },
    { name: 'Gerard', id: 4 },
  ]);
  return (
    <div className={styles['root']}>
      <div className="main">
        <Draggable onChange={setState} list={state}>
          {state.map((item, index) => (
            <div className="draggable-item" draggable={index > 1} key={item.id}>
              <span>{index + 1}.</span> <span>{item.name}</span>{' '}
              <span>{item.id}</span>
            </div>
          ))}
        </Draggable>
        <div className="data">
          [
          {state.map((it) => (
            <div key={it.id}>{JSON.stringify(it)}</div>
          ))}
          ]
        </div>
      </div>
    </div>
  );
};

export default App;
`},379:function(e,n){n.Z=`.root {
  :global {
    .main {
      display: flex;
      margin-top: 1rem;
    }
    .draggable-item {
      padding: 0 0.5rem;
      border: 1px solid #e6e6e6;
      background: #fff1d7;
      line-height: 32px;
      &[draggable='true'] {
        cursor: col-resize;
      }
    }
    .data {
      padding: 0 20px;
      white-space: pre-wrap;
    }
  }
}
`},89563:function(e,n){n.Z=`import { Draggable } from '@tool-pack/react-ui';
import styles from './tag.module.scss';
import React from 'react';

const App: React.FC = () => {
  const [state, setState] = React.useState<{ name: string; id: number }[]>([
    { name: 'John', id: 1 },
    { name: 'Joao', id: 2 },
    { name: 'Jean', id: 3 },
    { name: 'Gerard', id: 4 },
  ]);
  return (
    <div className={styles['root']}>
      <div className="main">
        <Draggable onChange={setState} list={state} tag={null}>
          {state.map((item, index) => (
            <div className="draggable-item" key={item.id}>
              <span>{index + 1}.</span> <span>{item.name}</span>{' '}
              <span>{item.id}</span>
            </div>
          ))}
        </Draggable>
        <div className="data">
          [
          {state.map((it) => (
            <div key={it.id}>{JSON.stringify(it)}</div>
          ))}
          ]
        </div>
      </div>
    </div>
  );
};

export default App;
`},21338:function(e,n){n.Z=`import { ButtonGroup, Draggable, Button } from '@tool-pack/react-ui';
import styles from './transition.module.scss';
import React from 'react';

const App: React.FC = () => {
  const [state, setState] = React.useState<{ name: string; id: number }[]>([
    { name: 'John', id: 1 },
    { name: 'Joao', id: 2 },
    { name: 'Jean', id: 3 },
    { name: 'Gerard', id: 4 },
  ]);
  return (
    <div className={styles['root']}>
      <ButtonGroup>
        <Button
          onClick={() => {
            const id = state.length + 1;
            setState([...state, { name: 'anyone', id }]);
          }}
          type="primary"
        >
          \u6DFB\u52A0
        </Button>
        <Button onClick={() => setState(state.slice(0, -1))} type="success">
          \u5220\u51CF
        </Button>
      </ButtonGroup>
      <div className="main">
        <Draggable onChange={setState} list={state} tag={null} transition>
          {state.map((item, index) => (
            <div className="draggable-item" key={item.id}>
              <span>{index + 1}.</span> <span>{item.name}</span>{' '}
              <span>{item.id}</span>
            </div>
          ))}
        </Draggable>
        <div className="data">
          [
          {state.map((it) => (
            <div key={it.id}>{JSON.stringify(it)}</div>
          ))}
          ]
        </div>
      </div>
    </div>
  );
};

export default App;
`},35663:function(e,n){n.Z=`.root {
  :global {
    .main {
      display: flex;
      margin-top: 1rem;
    }
    .t-draggable {
      flex: 1;
    }
    .draggable-item {
      padding: 0 0.5rem;
      border: 1px solid #e6e6e6;
      background: #fff1d7;
      line-height: 32px;
    }
    .data {
      flex: 1;
      padding: 0 20px;
      white-space: pre-wrap;
    }
    .t-group {
      &-enter-active,
      &-leave-active,
      &-move-active {
        transition: all 0.3s ease;
      }
      &-enter-from {
        transform: translateY(-100%);
        opacity: 0;
      }
      &-leave-to {
        transform: translateY(100%);
        opacity: 0;
      }
    }
  }
}
`},37094:function(e,n){n.Z=`import { ButtonGroup, Draggable, Button } from '@tool-pack/react-ui';
import styles from './transition.module.scss';
import React from 'react';

const App: React.FC = () => {
  const [state, setState] = React.useState<{ name: string; id: number }[]>([
    { name: 'John', id: 1 },
    { name: 'Joao', id: 2 },
    { name: 'Jean', id: 3 },
    { name: 'Gerard', id: 4 },
  ]);
  return (
    <div className={styles['root']}>
      <ButtonGroup>
        <Button
          onClick={() => {
            const id = state.length + 1;
            setState([...state, { name: 'anyone', id }]);
          }}
          type="primary"
        >
          \u6DFB\u52A0
        </Button>
        <Button onClick={() => setState(state.slice(0, -1))} type="success">
          \u5220\u51CF
        </Button>
      </ButtonGroup>
      <div className="main">
        <Draggable onChange={setState} list={state} transition>
          {state.map((item, index) => (
            <div className="draggable-item" key={item.id}>
              <span>{index + 1}.</span> <span>{item.name}</span>{' '}
              <span>{item.id}</span>
            </div>
          ))}
        </Draggable>
        <div className="data">
          [
          {state.map((it) => (
            <div key={it.id}>{JSON.stringify(it)}</div>
          ))}
          ]
        </div>
      </div>
    </div>
  );
};

export default App;
`},383:function(e,n){n.Z=`import { Button, Drawer, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [appendTo, setAppendTo] = useState<HTMLElement | null>(null);

  const hide = () => setVisible(false);

  const appendToCurrent = () => {
    if (appendTo !== null && visible) {
      hide();
      return;
    }
    setAppendTo(null);
    setTimeout(() => setVisible(true));
  };
  const appendToNestDemo = () => {
    if (visible) {
      hide();
      return;
    }
    setAppendTo(document.querySelector('.drawer-demo-nest') as HTMLElement);
    setTimeout(() => setVisible(true));
  };

  return (
    <Space
      style={{
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        height: '260px',
      }}
      vertical
    >
      <Button onClick={appendToCurrent} type="primary">
        \u6E32\u67D3\u5728\u5F53\u524Ddom
      </Button>
      <Button onClick={appendToNestDemo} type="primary" plain>
        \u6E32\u67D3\u5728\u5D4C\u5957demo
      </Button>
      <Drawer
        appendTo={() => appendTo}
        visible={visible}
        onClose={hide}
        header={null}
        zIndex={1}
      >
        hello world
      </Drawer>
    </Space>
  );
};

export default App;
`},93923:function(e,n){n.Z=`import {
  PLACEMENTS,
  Divider,
  Button,
  Drawer,
  Layout,
  Space,
} from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const [placement, setPlacement] =
    useState<(typeof PLACEMENTS)[number]>('right');

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <Space>
      <div>
        {PLACEMENTS.map((p) => (
          <label key={p}>
            <input
              onChange={() => setPlacement(p)}
              checked={placement === p}
              type="radio"
            />
            {p}
          </label>
        ))}
      </div>
      <Button type="primary" onClick={show}>
        \u6253\u5F00
      </Button>
      <Drawer
        placement={placement}
        title="Basic Drawer"
        visible={visible}
        footer={'footer'}
        onClose={hide}
      >
        <Layout vertical>
          body
          <br />
          <br />
          <Divider lineStyle="dashed">\u534E\u4E3D\u7684\u5206\u5272\u7EBF</Divider>
          <textarea
            onChange={(e) => setValue(e.target.value)}
            value={value}
            rows={8}
          />
          <Divider lineStyle="dashed">\u534E\u4E3D\u7684\u5206\u5272\u7EBF</Divider>
          <ul style={{ padding: '20px' }}>
            {[...Array.from({ length: 50 }).keys()].map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </Layout>
      </Drawer>
    </Space>
  );
};

export default App;
`},57610:function(e,n){n.Z=`import { ButtonGroup, Button, Drawer, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <Space
      style={{ position: 'relative', overflow: 'hidden', height: '100px' }}
      className="drawer-demo-nest"
    >
      <Button type="primary" onClick={show}>
        \u6253\u5F00
      </Button>
      <Drawer
        esc={!visible2 && !visible3}
        visible={visible}
        onClose={hide}
        header={null}
      >
        <ButtonGroup>
          <Button onClick={() => setVisible2(true)} type="primary">
            \u6253\u5F00\u5D4C\u5957\u62BD\u5C49
          </Button>
          <Button
            onClick={() => setVisible3(true)}
            type="primary"
            plain="dashed"
          >
            \u6253\u5F00\u5185\u90E8\u5D4C\u5957\u62BD\u5C49
          </Button>
        </ButtonGroup>

        <Drawer
          onClose={(): boolean | void => {
            if (window.confirm('\u786E\u8BA4\u5173\u95ED\uFF1F')) {
              setVisible2(false);
            } else return false;
          }}
          onLeave={() => setVisible2(false)}
          closeOnClickMask={false}
          visible={visible2}
          placement="left"
          title="\u5D4C\u5957\u62BD\u5C49"
          esc
        >
          hello world <br />
          <textarea cols={30} rows={10}></textarea>
        </Drawer>

        <Drawer
          onLeave={() => setVisible3(false)}
          visible={visible3}
          placement="bottom"
          appendTo={null}
          title="\u5185\u90E8\u5D4C\u5957\u62BD\u5C49"
          esc={visible}
          size="50vh"
        >
          hello world <br />
          <textarea cols={30} rows={10}></textarea>
        </Drawer>
      </Drawer>
    </Space>
  );
};

export default App;
`},8981:function(e,n){n.Z=`import {
  PLACEMENTS,
  Divider,
  Button,
  Drawer,
  Layout,
  Space,
} from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const [placement, setPlacement] =
    useState<(typeof PLACEMENTS)[number]>('right');

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <Space>
      <div>
        {PLACEMENTS.map((p) => (
          <label key={p}>
            <input
              onChange={() => setPlacement(p)}
              checked={placement === p}
              type="radio"
            />
            {p}
          </label>
        ))}
      </div>
      <Button type="primary" onClick={show}>
        \u6253\u5F00
      </Button>
      <Drawer
        placement={placement}
        title="Basic Drawer"
        visible={visible}
        footer={'footer'}
        onClose={hide}
        resizeable
      >
        <Layout vertical>
          body
          <br />
          <br />
          <Divider lineStyle="dashed">\u534E\u4E3D\u7684\u5206\u5272\u7EBF</Divider>
          <textarea
            onChange={(e) => setValue(e.target.value)}
            value={value}
            rows={8}
          />
          <Divider lineStyle="dashed">\u534E\u4E3D\u7684\u5206\u5272\u7EBF</Divider>
          <ul style={{ padding: '20px' }}>
            {[...Array.from({ length: 50 }).keys()].map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </Layout>
      </Drawer>
    </Space>
  );
};

export default App;
`},31698:function(e,n){n.Z=`import {
  type DropdownOptionsItem,
  ButtonGroup,
  useMessage,
  Dropdown,
  Button,
  Icons,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const options: DropdownOptionsItem[] = [
  {
    label: '\u9EC4\u91D1\u86CB\u7092\u996D',
    key: '1',
  },
  {
    label: '\u626C\u5DDE\u7092\u996D',
    key: '2',
  },
];
const App: React.FC = () => {
  const message = useMessage();
  return (
    <>
      <ButtonGroup>
        <Button type="primary">\u83DC\u5355</Button>
        <Dropdown
          onSelect={(option) => message.info(option.label)}
          options={options}
        >
          <Button
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
            type="primary"
          />
        </Dropdown>
      </ButtonGroup>
    </>
  );
};

export default App;
`},94731:function(e,n){n.Z=`import {
  DropdownOptionsItem,
  DropdownProps,
  useMessage,
  Dropdown,
  Icons,
} from '@tool-pack/react-ui';
import React from 'react';

const options: DropdownOptionsItem[] = [
  {
    children: [
      {
        key: 'shreddedChicken',
        label: '\u624B\u6495\u9E21',
      },
      {
        children: [
          {
            label: '\u9EC4\u91D1\u86CB\u7092\u996D',
            key: 'hjdcf',
          },
          {
            label: '\u626C\u5DDE\u7092\u996D',
            key: 'yzcf',
          },
        ],
        key: 'friedRice',
        type: 'group',
        label: '\u7092\u996D',
      },
    ],
    icon: <Icons.CircleInfo />,
    type: 'group',
    label: '\u996D\u83DC\u7C7B',
    key: 'meals',
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    children: [
      {
        key: 'durian',
        label: '\u69B4\u83B2',
      },
      {
        children: [
          {
            key: 'pineapple',
            label: '\u83E0\u841D',
          },
          {
            key: 'ananas',
            label: '\u51E4\u68A8',
          },
        ],
        label: '\u{1F34D}',
        key: 'bl',
      },
    ],
    label: '\u6C34\u679C\u7C7B',
    key: 'fruit',
  },
  {
    disabled: true,
    key: 'other',
    label: '\u5176\u5B83',
  },
];
const App: React.FC = () => {
  const message = useMessage();

  const onSelect: DropdownProps['onSelect'] = (option, parents) => {
    const labels = parents
      .map((opt) => opt.label)
      .concat(option.label)
      .join(' => ');
    message.success(labels);
  };
  return (
    <div>
      <Dropdown trigger="contextmenu" onSelect={onSelect} options={options}>
        <div
          style={{
            justifyContent: 'center',
            background: 'deeppink',
            alignItems: 'center',
            display: 'flex',
            height: '200px',
          }}
        >
          \u9F20\u6807\u53F3\u51FB
        </div>
      </Dropdown>
    </div>
  );
};

export default App;
`},38396:function(e,n){n.Z=`import {
  type DropdownOptionsItem,
  ButtonGroup,
  useMessage,
  Dropdown,
  Button,
  Icons,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const options: DropdownOptionsItem[] = [
  {
    label: '\u9EC4\u91D1\u86CB\u7092\u996D',
    key: '1',
  },
  {
    disabled: true,
    label: '\u626C\u5DDE\u7092\u996D',
    key: '2',
  },
];
const App: React.FC = () => {
  const message = useMessage();
  return (
    <>
      <ButtonGroup>
        <Button type="primary" plain="dashed">
          \u83DC\u5355
        </Button>
        <Dropdown
          onSelect={(option) => message.info(option.label)}
          options={options}
          trigger="click"
        >
          <Button
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
            type="primary"
          />
        </Dropdown>
      </ButtonGroup>
    </>
  );
};

export default App;
`},33664:function(e,n){n.Z=`import {
  type DropdownOptionsItem,
  ButtonGroup,
  useMessage,
  Dropdown,
  Button,
  Icons,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const options: DropdownOptionsItem[] = [
  {
    label: '\u9EC4\u91D1\u86CB\u7092\u996D',
    key: '1',
  },
  {
    type: 'divider',
    key: 'd',
  },
  {
    label: '\u626C\u5DDE\u7092\u996D',
    key: '2',
  },
];
const App: React.FC = () => {
  const message = useMessage();
  return (
    <>
      <ButtonGroup>
        <Button type="primary">\u83DC\u5355</Button>
        <Dropdown
          onSelect={(option) => message.info(option.label)}
          options={options}
          trigger="click"
        >
          <Button
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
            type="primary"
          />
        </Dropdown>
      </ButtonGroup>
    </>
  );
};

export default App;
`},34934:function(e,n){n.Z=`import {
  type DropdownOptionsItem,
  ButtonGroup,
  WordBalloon,
  useMessage,
  Dropdown,
  Button,
  Icons,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const options: DropdownOptionsItem[] = [
  { label: '\u9EC4\u91D1\u86CB\u7092\u996D', key: '1' },
  { label: '\u626C\u5DDE\u7092\u996D', key: '2' },
];
const App: React.FC = () => {
  const message = useMessage();
  return (
    <>
      <ButtonGroup>
        <Button type="primary">\u83DC\u5355</Button>
        <Dropdown
          footer={<WordBalloon placement="bottom">foo bar</WordBalloon>}
          onSelect={(option) => message.info(option.label)}
          options={options}
        >
          <Button
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
            type="primary"
          />
        </Dropdown>
      </ButtonGroup>
    </>
  );
};

export default App;
`},34746:function(e,n){n.Z=`import {
  type DropdownOptionsItem,
  DropdownProps,
  ButtonGroup,
  useMessage,
  Dropdown,
  Button,
  Icons,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const options: DropdownOptionsItem[] = [
  {
    children: [
      {
        key: 'shreddedChicken',
        label: '\u624B\u6495\u9E21',
      },
      {
        children: [
          {
            label: '\u9EC4\u91D1\u86CB\u7092\u996D',
            key: 'hjdcf',
          },
          {
            label: '\u626C\u5DDE\u7092\u996D',
            key: 'yzcf',
          },
        ],
        key: 'friedRice',
        type: 'group',
        label: '\u7092\u996D',
      },
    ],
    icon: <Icons.CircleInfo />,
    type: 'group',
    label: '\u996D\u83DC\u7C7B',
    key: 'meals',
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    children: [
      {
        key: 'durian',
        label: '\u69B4\u83B2',
      },
      {
        children: [
          {
            key: 'pineapple',
            label: '\u83E0\u841D',
          },
          {
            key: 'ananas',
            label: '\u51E4\u68A8',
          },
        ],
        label: '\u{1F34D}',
        key: 'bl',
      },
    ],
    label: '\u6C34\u679C\u7C7B',
    key: 'fruit',
  },
  {
    disabled: true,
    key: 'other',
    label: '\u5176\u5B83',
  },
];
const App: React.FC = () => {
  const message = useMessage();

  const onSelect: DropdownProps['onSelect'] = (option, parents) => {
    const labels = parents
      .map((opt) => opt.label)
      .concat(option.label)
      .join(' => ');
    message.success(labels);
  };

  return (
    <>
      <ButtonGroup>
        <Button type="primary">\u83DC\u5355</Button>
        <Dropdown onSelect={onSelect} options={options} trigger="click">
          <Button
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
            type="primary"
          />
        </Dropdown>
      </ButtonGroup>
    </>
  );
};

export default App;
`},9132:function(e,n){n.Z=`import {
  type DropdownOptionsItem,
  ButtonGroup,
  useMessage,
  Dropdown,
  Button,
  Icons,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const options: DropdownOptionsItem[] = [
  { label: '\u9EC4\u91D1\u86CB\u7092\u996D', key: '1' },
  { label: '\u626C\u5DDE\u7092\u996D', key: '2' },
];
const App: React.FC = () => {
  const message = useMessage();
  return (
    <>
      <ButtonGroup>
        <Button type="primary">\u83DC\u5355</Button>
        <Dropdown
          onSelect={(option) => message.info(option.label)}
          header={<h2>\u9009\u4EC0\u4E48\u597D\u5462</h2>}
          options={options}
        >
          <Button
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
            type="primary"
          />
        </Dropdown>
      </ButtonGroup>
    </>
  );
};

export default App;
`},69920:function(e,n){n.Z=`import {
  type DropdownOptionsItem,
  ButtonGroup,
  useMessage,
  Dropdown,
  Button,
  Icons,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const options: DropdownOptionsItem[] = [
  {
    label: '\u9EC4\u91D1\u86CB\u7092\u996D',
    key: '1',
  },
  {
    label: '\u626C\u5DDE\u7092\u996D',
    key: '2',
  },
];
const App: React.FC = () => {
  const message = useMessage();
  return (
    <>
      <ButtonGroup>
        <Button type="primary">\u83DC\u5355</Button>
        <Dropdown
          onSelect={(option) => message.info(option.label)}
          hideOnClick={false}
          options={options}
          trigger="click"
        >
          <Button
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
            type="primary"
          />
        </Dropdown>
      </ButtonGroup>
    </>
  );
};

export default App;
`},2643:function(e,n){n.Z=`import {
  type DropdownOptionsItem,
  ButtonGroup,
  useMessage,
  Dropdown,
  Button,
  Icons,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const options: DropdownOptionsItem[] = [
  {
    icon: <Icons.CircleInfo />,
    label: '\u9EC4\u91D1\u86CB\u7092\u996D',
    key: '1',
  },
  {
    icon: <Icons.CircleInfoFill />,
    label: '\u626C\u5DDE\u7092\u996D',
    key: '2',
  },
];
const App: React.FC = () => {
  const message = useMessage();
  return (
    <>
      <ButtonGroup>
        <Button type="primary">\u83DC\u5355</Button>
        <Dropdown
          onSelect={(option) => message.info(option.label)}
          options={options}
          trigger="click"
        >
          <Button
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
            type="primary"
          />
        </Dropdown>
      </ButtonGroup>
    </>
  );
};

export default App;
`},92630:function(e,n){n.Z=`import {
  type DropdownOptionsItem,
  type DropdownProps,
  ButtonGroup,
  useMessage,
  Dropdown,
  Tooltip,
  Button,
  Icons,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const options: DropdownOptionsItem[] = [
  {
    label: '\u624B\u6495\u9E21',
    key: '1',
  },
  {
    children: [
      {
        label: '\u9EC4\u91D1\u86CB\u7092\u996D,\u9EC4\u91D1\u86CB\u7092\u996D',
        key: '4',
      },
      {
        label: '\u626C\u5DDE\u7092\u996D',
        key: '5',
      },
    ],
    label: (
      <Tooltip title={'\u8F6E\u80CE3\u{1F31F}\u63A8\u8350'}>
        <div>\u86CB\u7092\u996D</div>
      </Tooltip>
    ),
    extra: '\u63A8\u8350 ',
    key: '2',
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    label: '\u69B4\u83B2',
    key: '3',
  },
];
const App: React.FC = () => {
  const message = useMessage();

  const onSelect: DropdownProps['onSelect'] = (option, parents) => {
    const labels = parents
      .map((opt) => {
        if (!React.isValidElement(opt.label)) return opt.label;
        return opt.label.props.children.props.children;
      })
      .concat(option.label)
      .join(' => ');
    message.success(labels);
  };

  return (
    <>
      <ButtonGroup>
        <Button type="primary">\u83DC\u5355</Button>
        <Dropdown onSelect={onSelect} options={options} trigger="click">
          <Button
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
            type="primary"
          />
        </Dropdown>
      </ButtonGroup>
    </>
  );
};

export default App;
`},96109:function(e,n){n.Z=`import {
  type DropdownOptionsItem,
  ButtonGroup,
  useMessage,
  Dropdown,
  Button,
  Icons,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const options: DropdownOptionsItem[] = [
  {
    label: '\u9EC4\u91D1\u86CB\u7092\u996D',
    key: '1',
  },
  {
    label: '\u626C\u5DDE\u7092\u996D',
    key: '2',
  },
];
const App: React.FC = () => {
  const message = useMessage();
  return (
    <>
      <ButtonGroup>
        <Button type="primary">\u83DC\u5355</Button>
        <Dropdown
          onSelect={(option) => message.info(option.label)}
          options={options}
          trigger="click"
          showArrow
        >
          <Button
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
            type="primary"
          />
        </Dropdown>
      </ButtonGroup>
    </>
  );
};

export default App;
`},16497:function(e,n){n.Z=`import {
  type DropdownOptionsItem,
  ButtonGroup,
  useMessage,
  Dropdown,
  Button,
  Icons,
  Space,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const options: DropdownOptionsItem[] = [
  {
    label: '\u9EC4\u91D1\u86CB\u7092\u996D',
    key: '1',
  },
  {
    children: [
      {
        label: 'test',
        key: 'test',
      },
    ],
    label: '\u626C\u5DDE\u7092\u996D',
    key: '2',
  },
];
const App: React.FC = () => {
  const message = useMessage();
  return (
    <Space>
      <ButtonGroup>
        <Button type="primary" size="small">
          small
        </Button>
        <Dropdown
          onSelect={(option) => message.info(option.label)}
          options={options}
          trigger="click"
          size={'small'}
        >
          <Button
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
            type="primary"
            size="small"
          />
        </Dropdown>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary" size="medium">
          medium
        </Button>
        <Dropdown
          onSelect={(option) => message.info(option.label)}
          options={options}
          trigger="click"
          size="medium"
        >
          <Button
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
            type="primary"
            size="medium"
          />
        </Dropdown>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary" size="large">
          large
        </Button>
        <Dropdown
          onSelect={(option) => message.info(option.label)}
          options={options}
          trigger="click"
          size="large"
        >
          <Button
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
            type="primary"
            size="large"
          />
        </Dropdown>
      </ButtonGroup>
    </Space>
  );
};

export default App;
`},37938:function(e,n){n.Z=`import { Empty } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return <Empty></Empty>;
};

export default App;
`},54258:function(e,n){n.Z=`import { Button, Empty, Icons, Icon } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Empty
      icon={
        <Icon size={35}>
          <Icons.CircleWarningFill />
        </Icon>
      }
      description="empty"
    >
      <Button>\u70B9\u51FB\u5237\u65B0</Button>
    </Empty>
  );
};

export default App;
`},25378:function(e,n){n.Z=`import { Icons, Space, Icon } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space style={{ fontSize: '16px' }} className="demo-icon-basic">
      <Icon attrs={{ style: { color: 'blue' } }} size={26}>
        <Icons.Close />
      </Icon>
      <Icon color="red">
        <Icons.Loading />
      </Icon>
    </Space>
  );
};

export default App;
`},316:function(e,n){n.Z=`import {
  useMessageHolder,
  Tooltip,
  Button,
  Icons,
  Space,
  Icon,
} from '@tool-pack/react-ui';
import { Clipboard as ClipboardTool } from '@tool-pack/bom';
import React from 'react';

const App: React.FC = () => {
  const [message, holder] = useMessageHolder();
  const copy = (iconName: string) => {
    const content = \`<Icon><Icons.\${iconName} /></Icon>\`;
    ClipboardTool.copy(content).then(() =>
      message.success(
        <div>
          <Button
            style={{ marginRight: '10px' }}
            type="warning"
            size="small"
            disabled
          >
            {content}
          </Button>
          \u590D\u5236\u6210\u529F \u{1F389}
        </div>,
      ),
    );
  };

  return (
    <>
      <Space className="demo-icon-icons">
        {holder}
        {Object.keys(Icons).map((k) => (
          <Tooltip destroyOnHide title={k} key={k}>
            <Icon attrs={{ onClick: () => copy(k) }}>
              {React.createElement(Icons[k as keyof typeof Icons])}
            </Icon>
          </Tooltip>
        ))}
      </Space>
    </>
  );
};

export default App;
`},20223:function(e,n){n.Z=`import { Image } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Image
      src="https://s.cn.bing.net/th?id=OHR.MallarDucks_ZH-CN7422818269_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
      attrs={{ style: { background: 'pink' } }}
      fit="contain"
      height={100}
      width={200}
    />
  );
};

export default App;
`},98200:function(e,n){n.Z=`import { ImagePreviewGroup, Image } from '@tool-pack/react-ui';
import React from 'react';

const list = [
  'https://s.cn.bing.net/th?id=OHR.BadlandsSunrise_ZH-CN5906162228_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
  'https://s.cn.bing.net/th?id=OHR.MallarDucks_ZH-CN7422818269_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
  'https://s.cn.bing.net/th?id=OHR.HelloSeal_ZH-CN1064568368_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
  'https://s.cn.bing.net/th?id=OHR.SarekSweden_ZH-CN9728518595_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
  'https://s.cn.bing.net/th?id=OHR.AthensAcropolis_ZH-CN9942357439_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
];

const App: React.FC = () => {
  return (
    <ImagePreviewGroup>
      {list.map((i) => (
        <Image width={192} src={i} key={i} />
      ))}
    </ImagePreviewGroup>
  );
};

export default App;
`},84419:function(e,n){n.Z=`import { Image } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Image
      src="https://s.cn.bing.net/th?id=OHR.BadlandsSunrise_ZH-CN5906162228_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
      width={192}
      lazy
    />
  );
};

export default App;
`},94861:function(e,n){n.Z=`import { Image } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Image
      src="https://s.cn.bing.net/th?id=OHR.BadlandsSunrise_ZH-CN5906162228_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
      attrs={{ style: { background: 'pink' } }}
      preview={false}
      fit="contain"
      width={192}
    />
  );
};

export default App;
`},50848:function(e,n){n.Z=`import { InputPopover } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <InputPopover>
      <input />
    </InputPopover>
  );
};

export default App;
`},76696:function(e,n){n.Z=`import { Input } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Input
        value=" \u56DE\u5FC6\u50CF\u4E2A\u8BF4\u4E66\u7684\u4EBA\uFF0C\u7528\u5145\u6EE1\u4E61\u97F3\u7684\u53E3\u543B
        \u8DF3\u8FC7\u6C34\u5751\u7ED5\u8FC7\u5C0F\u6751\uFF0C\u7B49\u76F8\u9047\u7684\u7F18\u5206
        \u4F60\u7528\u6CE5\u5DF4\u634F\u4E00\u5EA7\u57CE\uFF0C\u8BF4\u5C06\u6765\u8981\u5A36\u6211\u8FDB\u95E8"
        placeholder="autoSize = true"
        type="textarea"
        clearable
        autoSize
      />
      <br />
      <Input
        value=" \u8F6C\u591A\u5C11\u8EAB\uFF0C\u8FC7\u51E0\u6B21\u95E8\uFF0C\u865A\u63B7\u9752\u6625
        \u5C0F\u5C0F\u7684\u8A93\u8A00\u8FD8\u4E0D\u7A33\uFF0C\u5C0F\u5C0F\u7684\u6CEA\u6C34\u8FD8\u5728\u6491"
        placeholder="autoSize = true, rows = 2"
        type="textarea"
        clearable
        autoSize
        rows={2}
      />
      <br />
      <Input
        value="
      \u7A1A\u5AE9\u7684\u5507\u5728\u8BF4\u79BB\u5206\uFF0C\u6211\u7684\u5FC3\u91CC\u4ECE\u6B64\u4F4F\u4E86\u4E00\u4E2A\u4EBA

      \u66FE\u7ECF\u6A21\u6837\u5C0F\u5C0F\u7684\u6211\u4EEC\uFF0C\u90A3\u5E74\u4F60\u642C\u5C0F\u5C0F\u7684\u677F\u51F3

      \u4E3A\u620F\u5165\u8FF7\u6211\u4E5F\u4E00\u8DEF\u8DDF\uFF0C\u6211\u5728\u627E\u90A3\u4E2A\u6545\u4E8B\u91CC\u7684\u4EBA

      \u4F60\u662F\u4E0D\u80FD\u7F3A\u5C11\u7684\u90E8\u5206\uFF0C\u4F60\u5728\u6811\u4E0B\u5C0F\u5C0F\u7684\u6253\u76F9
      "
        placeholder="autoSize = { minRows: 5, maxRows: 10 }"
        autoSize={{ maxRows: 10, minRows: 5 }}
        type="textarea"
      />
    </>
  );
};

export default App;
`},96849:function(e,n){n.Z=`import { Input } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Input />
      <br />
      <Input placeholder="disabled" disabled />
    </>
  );
};

export default App;
`},90298:function(e,n){n.Z=`import { Input } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <Input
      placeholder="clearable"
      onChange={setValue}
      value={value}
      clearable
    />
  );
};

export default App;
`},9141:function(e,n){n.Z=`import { useMessageHolder, Button, Input, Space } from '@tool-pack/react-ui';
import React, { useRef } from 'react';

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, holder] = useMessageHolder();
  return (
    <Space>
      {holder}
      <Button
        onClick={() => {
          const input = inputRef.current;
          if (!input) return;
          input.focus();
          setTimeout(() => input.blur(), 2000);
        }}
      >
        \u805A\u7126\u5E76\u4E14 2 \u79D2\u540E\u5931\u6548
      </Button>
      <Input
        attrs={{
          onFocus: () => message.success('focus'),
          onBlur: () => message.error('blur'),
        }}
        rootAttrs={{ style: { flex: 1 } }}
        placeholder="input"
        ref={inputRef}
        clearable
      />
    </Space>
  );
};

export default App;
`},32861:function(e,n){n.Z=`import { Input } from '@tool-pack/react-ui';
import React from 'react';

const segmenter = new Intl.Segmenter('fr', {
  granularity: 'grapheme',
});

const App: React.FC = () => {
  return (
    <>
      <Input placeholder="showCount" showCount clearable autoSize />
      <br />
      <Input
        placeholder="maxLength + showCount"
        value="\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}"
        maxLength={20}
        showCount
        clearable
        autoSize
      />
      <br />
      <Input
        countView={(_value, wordCount) => <span>[{wordCount} , 20]</span>}
        count={(value) => Array.from(segmenter.segment(value)).length}
        placeholder="countView + count + maxLength + showCount"
        value="\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}"
        maxLength={20}
        showCount
        clearable
        autoSize
      />
      <br />
      <Input
        placeholder="maxLength + showCount"
        type="textarea"
        maxLength={20}
        showCount
        clearable
        autoSize
        rows={2}
      />
      <br />
      <Input
        autoSize={{ maxRows: 10, minRows: 5 }}
        placeholder="showCount"
        type="textarea"
        showCount
      />
    </>
  );
};

export default App;
`},48287:function(e,n){n.Z=`import { Input } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return <Input placeholder="\u52A0\u8F7D\u4E2D..." clearable loading />;
};

export default App;
`},83281:function(e,n){n.Z=`import { Input } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [password, setPassword] = useState('');
  return (
    <>
      <Input
        showPasswordOn="mouseDown"
        onChange={setPassword}
        placeholder="password"
        value={password}
        type="password"
        clearable
      />
      <br />
      <Input
        onChange={setPassword}
        showPasswordOn="click"
        placeholder="password"
        value={password}
        type="password"
        clearable
      />
      <br />
    </>
  );
};

export default App;
`},41159:function(e,n){n.Z=`import { Input } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Input placeholder="small" size="small" />
      <br />
      <Input placeholder="medium" size="medium" />
      <br />
      <Input placeholder="large" size="large" />
    </>
  );
};

export default App;
`},13076:function(e,n){n.Z=`import { Icons, Input, Icon } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Input
        prefix={
          <Icon>
            <Icons.CircleInfoFill />
          </Icon>
        }
        placeholder="\u524D\u7F00"
        clearable
      />
      <br />
      <Input
        suffix={
          <Icon>
            <Icons.CircleInfoFill />
          </Icon>
        }
        placeholder="\u540E\u7F00"
        clearable
      />
    </>
  );
};

export default App;
`},10550:function(e,n){n.Z=`import { Input } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Input placeholder="select" status="warning" />
      <br />
      <Input placeholder="select" status="error" />
    </>
  );
};

export default App;
`},33456:function(e,n){n.Z=`import { Input } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Input placeholder="textarea" type="textarea" clearable rows={5} />
      <br />
      <Input placeholder="textarea disabled" type="textarea" disabled />
    </>
  );
};

export default App;
`},94979:function(e,n){n.Z=`import { Footer, Header, Layout, Aside, Main } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Layout style={{ background: '#efefef', textAlign: 'center' }} vertical>
      <Header style={{ background: 'pink' }} className="header">
        header
      </Header>
      <Layout>
        <Aside style={{ width: '200px' }}>aside</Aside>
        <Main style={{ background: 'blue' }}>main</Main>
      </Layout>
      <Layout vertical>
        <Aside style={{ background: 'lime' }}>aside</Aside>
        <Main>main</Main>
      </Layout>
      <Footer style={{ background: 'pink' }}>footer</Footer>
    </Layout>
  );
};

export default App;
`},96071:function(e,n){n.Z=`import { Loading, Button } from '@tool-pack/react-ui';
import React, { useReducer } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useReducer((l) => !l, false);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={setLoading} type="primary">
        {loading ? '\u9690\u85CF' : '\u663E\u793A'}loading
      </Button>
      <Loading visible={loading}>
        <div
          style={{
            background: 'deeppink',
            lineHeight: '100px',
            marginTop: '20px',
            height: '100px',
          }}
        >
          \u6211\u662F\u5185\u5BB9
        </div>
      </Loading>
    </div>
  );
};

export default App;
`},2093:function(e,n){n.Z=`import { Loading, Button } from '@tool-pack/react-ui';
import React, { useReducer } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useReducer((l) => !l, false);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={setLoading} type="primary">
        {loading ? '\u9690\u85CF' : '\u663E\u793A'}\u5168\u5C4F\u7684loading
      </Button>
      <Loading onClose={setLoading} visible={loading} closeOnClick />
    </div>
  );
};

export default App;
`},83388:function(e,n){n.Z=`import { Loading, Button, Space } from '@tool-pack/react-ui';
import React, { useReducer } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useReducer((l) => !l, false);

  return (
    <Space style={{ textAlign: 'center' }} gap={20} vertical fill>
      <Button onClick={setLoading} type="primary">
        {loading ? '\u9690\u85CF' : '\u663E\u793A'}loading
      </Button>
      <Loading visible={loading} mode="insert">
        <div
          style={{
            background: 'deeppink',
            lineHeight: '100px',
            height: '100px',
          }}
        >
          \u6211\u662F\u5185\u5BB9
        </div>
      </Loading>
      <Loading visible={loading} mode="insert">
        <div
          style={{
            lineHeight: '100px',
            background: 'pink',
            height: '100px',
          }}
        >
          \u4F7F\u7528\u63D2\u5165\u6A21\u5F0F
        </div>
        <div
          style={{
            background: 'wheat',
            lineHeight: '100px',
            height: '100px',
          }}
        >
          \u4F46\u56E0\u4E3A\u662F\u591A\u4E2A\u5143\u7D20\uFF0C\u6240\u4EE5\u53D8\u4E3A\u4E86\u5305\u88F9\u5143\u7D20
        </div>
      </Loading>
    </Space>
  );
};

export default App;
`},73761:function(e,n){n.Z=`import { showLoading, Button } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Button
        onClick={() =>
          showLoading({ text: '\u5168\u5C4FshowLoading\uFF0C\u70B9\u51FB\u4EFB\u610F\u5904\u5173\u95ED....' })
        }
        type="primary"
      >
        showLoading
      </Button>
    </div>
  );
};

export default App;
`},70026:function(e,n){n.Z=`import { Loading, Button } from '@tool-pack/react-ui';
import React, { useReducer } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useReducer((l) => !l, false);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={setLoading} type="primary">
        {loading ? '\u9690\u85CF' : '\u663E\u793A'}loading
      </Button>
      <Loading
        icon={
          <button className="loading-rotate" disabled>
            icon
          </button>
        }
        text={<Button>text</Button>}
        visible={loading}
      >
        <div
          style={{
            background: 'wheat',
            lineHeight: '100px',
            marginTop: '20px',
            height: '100px',
          }}
        >
          \u6211\u662F\u5185\u5BB9
        </div>
      </Loading>
    </div>
  );
};

export default App;
`},74229:function(e,n){n.Z=`import { useLoading, Button } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const { toggle } = useLoading({
    text: \`\u5168\u5C4FuseLoading\uFF0C\u70B9\u51FB\u4EFB\u610F\u5904\u5173\u95ED....\`,
    closeOnClick: true,
    visible: false,
  });
  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={toggle} type="primary">
        useLoading
      </Button>
    </div>
  );
};

export default App;
`},45468:function(e,n){n.Z=`import { useLoadingHolder, Button } from '@tool-pack/react-ui';
import React, { useEffect } from 'react';

const App: React.FC = () => {
  const [{ visible, toggle }, holder] = useLoadingHolder({
    attrs: {
      id: 'useLoadingHolder',
    },
    text: \`\u5168\u5C4FuseLoadingHolder\uFF0C\u70B9\u51FB\u4EFB\u610F\u5904\u5173\u95ED....\`,
    closeOnClick: false,
    visible: false,
  });

  useEffect(() => {
    if (!visible) return;
    const handler = () => toggle();
    window.addEventListener('click', handler, true);
    return () => window.removeEventListener('click', handler, true);
  }, [visible]);

  return (
    <div style={{ textAlign: 'center' }}>
      {holder}
      <Button onClick={toggle} type="primary">
        useLoadingHolder
      </Button>
    </div>
  );
};

export default App;
`},95137:function(e,n){n.Z=`import { Loading, Button, Space } from '@tool-pack/react-ui';
import React, { useReducer } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useReducer((l) => !l, false);

  return (
    <Space vertical fill>
      <Button onClick={setLoading} type="primary">
        {loading ? '\u9690\u85CF' : '\u663E\u793A'}loading
      </Button>
      <Loading visible={loading} mode="wrap">
        <div
          style={{
            background: 'deeppink',
            textAlign: 'center',
            lineHeight: '100px',
            overflow: 'auto',
            height: '100px',
          }}
        >
          <div style={{ height: '200%' }}>\u6211\u662F\u5185\u5BB9</div>
        </div>
      </Loading>
    </Space>
  );
};

export default App;
`},9440:function(e,n){n.Z=`import { useMessage, Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const Message = useMessage();
  return (
    <Space className="demo-message-basic">
      <Button onClick={() => Message.open('hello world')} type="primary">
        show message
      </Button>
    </Space>
  );
};

export default App;
`},4230:function(e,n){n.Z=`import { useMessage, Button, Space, Icons, Icon } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const Message = useMessage({
    // \u4E3A\u5BB9\u5668\u6DFB\u52A0classname
    containerAttrs: { className: 'container-class-name' },
    // \u4E3A\u7A97\u4F53\u6DFB\u52A0className
    attrs: { className: 'custom-class-name' },
    showClose: true,
    duration: 0,
  });
  return (
    <Space className="demo-message-class-name">
      <Button onClick={() => Message.success('hello world')} type="success">
        show message
      </Button>
      <Button
        onClick={() =>
          Message.info('hello world', {
            // \u4E3A\u7A97\u4F53\u6DFB\u52A0className
            attrs: { className: 'custom-class-name2' },
          })
        }
        type="info"
      >
        show message
      </Button>
      <Button onClick={() => Message.clear()} type="primary">
        <Icon size="1.5em">
          <Icons.CircleClose />
        </Icon>
      </Button>
    </Space>
  );
};

export default App;
`},12411:function(e,n){n.Z=`import { useMessage, Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const Message = useMessage({ hoverKeep: true });
  return (
    <Space className="demo-message">
      <Button onClick={() => Message.success('hello')} type="success">
        success
      </Button>
      <Button onClick={() => Message.info('info')} type="success">
        info
      </Button>
      <Button onClick={() => Message.warning('warning')} type="success">
        warning
      </Button>
      <Button
        onClick={() => Message.error('error', { hoverKeep: false })}
        type="danger"
      >
        hoverKeep: false
      </Button>
    </Space>
  );
};

export default App;
`},48881:function(e,n){n.Z=`import { useMessage, Button, Space, Icons } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const Message = useMessage();
  return (
    <Space className="demo-message-icon">
      <Button onClick={() => Message.error('hello world')} type="danger">
        show message
      </Button>
      <Button
        onClick={() =>
          Message.error('hello world', {
            icon: <Icons.CircleClose />,
          })
        }
        type="danger"
      >
        show message
      </Button>
    </Space>
  );
};

export default App;
`},82251:function(e,n){n.Z=`import { useMessage, Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const Message = useMessage({ showClose: true, duration: 0 });
  return (
    <Space className="demo-message">
      <Button
        onClick={() => Message.open('hello', { type: 'success' })}
        type="success"
      >
        success
      </Button>
      <Button
        onClick={() => Message.open('info', { type: 'info' })}
        type="info"
      >
        info
      </Button>
      <Button onClick={() => Message.warning('warning')} type="warning">
        warning
      </Button>
      <Button
        onClick={() =>
          Message.error('error', { showClose: false, duration: 2500 })
        }
        type="danger"
      >
        showClose: false
      </Button>
      <Button onClick={() => Message.clear()} type="primary">
        clear
      </Button>
    </Space>
  );
};

export default App;
`},36934:function(e,n){n.Z=`import { Message, Button, Space } from '@tool-pack/react-ui';
import React, { useReducer } from 'react';

const App: React.FC = () => {
  const [visible, toggle] = useReducer((v) => !v, true);
  return (
    <Space className="demo-message">
      <Button type={'primary'} plain={'dashed'} onClick={toggle} size={'large'}>
        {visible ? '\u9690\u85CF' : '\u663E\u793A'}
      </Button>
      {visible && (
        <Message
          onLeave={() => {
            toggle();
          }}
          type={'info'}
          showClose
          hoverKeep
        >
          hello world
        </Message>
      )}
    </Space>
  );
};

export default App;
`},4440:function(e,n){n.Z=`import { useMessage, Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const Message = useMessage();
  return (
    <Space className="demo-message">
      <Button
        onClick={() => Message.open('hello', { type: 'success' })}
        type="success"
      >
        success
      </Button>
      <Button
        onClick={() => Message.open('info', { type: 'info' })}
        type="info"
      >
        info
      </Button>
      <Button onClick={() => Message.warning('warning')} type="warning">
        warning
      </Button>
      <Button onClick={() => Message.error('error')} type="danger">
        error
      </Button>
    </Space>
  );
};

export default App;
`},50169:function(e,n){n.Z=`import { useMessageHolder, Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const [Message, holder] = useMessageHolder();
  return (
    <>
      {holder}
      <Space className="demo-message">
        <Button onClick={() => Message.open('hello world')} type="primary">
          show message
        </Button>
      </Space>
    </>
  );
};

export default App;
`},88041:function(e,n){n.Z=`import { NumberTransition, Button, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <Space vertical>
      <Space>
        <Button
          onClick={() => setActive((v) => !v)}
          disabled={disabled}
          type="primary"
        >
          {active ? '\u6682\u505C' : '\u542F\u52A8'}
        </Button>
      </Space>
      <NumberTransition
        onFinished={() => {
          setDisabled(true);
          setActive(false);
        }}
        active={active}
        from={30}
        to={50}
      />
    </Space>
  );
};

export default App;
`},2468:function(e,n){n.Z=`import { NumberTransition, Button, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <Space vertical>
      <Space>
        <Button
          onClick={() => setActive((v) => !v)}
          disabled={disabled}
          type="primary"
        >
          {active ? '\u6682\u505C' : '\u542F\u52A8'}
        </Button>
      </Space>
      <NumberTransition
        onFinished={() => {
          setDisabled(true);
          setActive(false);
        }}
        active={active}
        duration={8000}
        to={25}
      />
    </Space>
  );
};

export default App;
`},96316:function(e,n){n.Z=`import { NumberTransition, Button, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const format = new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec');

const App: React.FC = () => {
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <Space vertical>
      <Space>
        <Button
          onClick={() => setActive((v) => !v)}
          disabled={disabled}
          type="primary"
        >
          {active ? '\u6682\u505C' : '\u542F\u52A8'}
        </Button>
      </Space>
      <NumberTransition
        onFinished={() => {
          setDisabled(true);
          setActive(false);
        }}
        format={(value) => {
          return format.format(Number(value));
        }}
        active={active}
        to={50}
      />
    </Space>
  );
};

export default App;
`},66590:function(e,n){n.Z=`import { NumberTransition, Button, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <Space vertical>
      <Space>
        <Button
          onClick={() => setActive((v) => !v)}
          disabled={disabled}
          type="primary"
        >
          {active ? '\u6682\u505C' : '\u542F\u52A8'}
        </Button>
      </Space>
      <Space>
        <div>\u5C0F\u6570\u4F4D 2</div>
        <NumberTransition
          onFinished={() => {
            setDisabled(true);
            setActive(false);
          }}
          active={active}
          precision={2}
        />
      </Space>
      <Space>
        <div>\u5C0F\u6570\u4F4D null \u4FDD\u6301\u539F\u6837</div>
        <NumberTransition
          onFinished={() => {
            setDisabled(true);
            setActive(false);
          }}
          precision={null}
          active={active}
        />
      </Space>
    </Space>
  );
};

export default App;
`},83186:function(e,n){n.Z=`import { NumberTransition, Button, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [signal, setSignal] = useState({});

  const reset = () => {
    setDisabled(false);
    setActive(false);
    setSignal({});
  };

  const onFinished = () => {
    setDisabled(true);
    setActive(false);
  };

  return (
    <Space vertical>
      <Space>
        <Button
          onClick={() => setActive((v) => !v)}
          disabled={disabled}
          type="primary"
        >
          {active ? '\u6682\u505C' : '\u542F\u52A8'}
        </Button>
        <Button onClick={reset}>\u91CD\u7F6E</Button>
      </Space>
      <NumberTransition
        onFinished={onFinished}
        resetSignal={signal}
        active={active}
        to={50}
      />
    </Space>
  );
};

export default App;
`},51181:function(e,n){n.Z=`import {
  NumberTransitionProps,
  NumberTransition,
  TIMING_FNS,
  Button,
  Space,
} from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [signal, setSignal] = useState({});

  const reset = () => {
    setDisabled(false);
    setActive(false);
    setSignal({});
  };

  const props: NumberTransitionProps = {
    onFinished: () => {
      setDisabled(true);
      setActive(false);
    },
    resetSignal: signal,
    duration: 10000,
    active,
    to: 25,
  };

  return (
    <Space vertical>
      <Space>
        <Button
          onClick={() => setActive((v) => !v)}
          disabled={disabled}
          type="primary"
        >
          {active ? '\u6682\u505C' : '\u542F\u52A8'}
        </Button>
        <Button onClick={reset}>\u91CD\u7F6E</Button>
      </Space>
      {TIMING_FNS.map((t) => {
        return (
          <Space key={t}>
            <div>{t}</div>
            <NumberTransition {...props} timingFunction={t} />
          </Space>
        );
      })}
    </Space>
  );
};

export default App;
`},72084:function(e,n){n.Z=`import React, { useEffect, useRef } from 'react';
import { Option } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    console.log(ref.current);
  }, []);

  return <Option ref={ref}>foo bar</Option>;
};

export default App;
`},6968:function(e,n){n.Z=`import { Option } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return <Option disabled>foo bar</Option>;
};

export default App;
`},58812:function(e,n){n.Z=`import { Option, Icons, Icon } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Option
      extra={
        <Icon>
          <Icons.Right />
        </Icon>
      }
    >
      foo bar
    </Option>
  );
};

export default App;
`},24718:function(e,n){n.Z=`import { Option, Icons } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return <Option icon={<Icons.CircleInfo />}>foo bar</Option>;
};

export default App;
`},51574:function(e,n){n.Z=`import { Option } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return <Option readonly>foo bar</Option>;
};

export default App;
`},55278:function(e,n){n.Z=`import { OptionValueType, PickerOption, Picker } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const numberOptions = createLetterOptions('0'.charCodeAt(0), 10);
const upOptions = createLetterOptions('A'.charCodeAt(0), 26);
const lowerOptions = createLetterOptions('a'.charCodeAt(0), 26);

const App: React.FC = () => {
  const [value, setValue] = useState<OptionValueType[]>([
    numberOptions[0]!.value,
    upOptions[1]!.value,
    lowerOptions[2]!.value,
    numberOptions[2]!.value,
    upOptions[1]!.value,
    lowerOptions[0]!.value,
  ]);
  return (
    <>
      \u5DF2\u9009\uFF1A[{value.toString()}]
      <br />
      <Picker
        options={[
          numberOptions,
          upOptions,
          lowerOptions,
          numberOptions,
          upOptions,
          lowerOptions,
        ]}
        panelAttrs={{ style: { height: '200px' } }}
        onChange={setValue}
        value={value}
      />
    </>
  );
};

function createLetterOptions(charCode: number, length: number): PickerOption[] {
  return Array.from({ length }).map((_, i) => {
    const letter = String.fromCharCode(charCode + i);
    return {
      label: letter,
      value: letter,
    };
  });
}

export default App;
`},99310:function(e,n){n.Z=`import { PickerOption, Picker } from '@tool-pack/react-ui';
import React, { useEffect, useState } from 'react';

const hours = createNumberOptions(24);
const minutes = createNumberOptions(60);
const seconds = createNumberOptions(60);

const App: React.FC = () => {
  const [value, setValue] = useState<string[]>(() => getTimeValue(new Date()));

  useEffect(() => {
    // \u8DDF\u968F\u6EDA\u52A8
    // const cb = () => setValue(getTimeValue(new Date()));
    // const timer = setInterval(cb, 1000);
    // return () => clearInterval(timer);
  }, []);

  return (
    <Picker
      panelAttrs={{ style: { height: '200px' } }}
      options={[hours, minutes, seconds]}
      format={(v) => v.join(':')}
      onChange={setValue}
      value={value}
    />
  );
};

function getTimeValue(date: Date) {
  return [date.getHours(), date.getMinutes(), date.getSeconds()].map((v) =>
    String(v).padStart(2, '0'),
  );
}
function createNumberOptions(length: number): PickerOption<string>[] {
  return Array.from({ length }).map((_, i) => {
    const value = String(i).padStart(2, '0');
    return {
      label: value,
      value: value,
    };
  });
}

export default App;
`},40322:function(e,n){n.Z=`import {
  OptionValueType,
  PickerOption,
  PickerPanel,
} from '@tool-pack/react-ui';
import React, { useState } from 'react';

const hours = createNumberOptions(24);
const minutes = createNumberOptions(60);
const seconds = createNumberOptions(60);

const App: React.FC = () => {
  const [value, setValue] = useState<OptionValueType[]>(() =>
    getTimeValue(new Date()),
  );

  return (
    <>
      \u5F53\u524D\u65F6\u95F4\uFF1A{value.join(':')}
      <br />
      <PickerPanel
        attrs={{ style: { height: '200px' } }}
        options={[hours, minutes, seconds]}
        onChange={setValue}
        value={value}
      />
    </>
  );
};

function getTimeValue(date: Date) {
  return [date.getHours(), date.getMinutes(), date.getSeconds()].map((v) =>
    String(v).padStart(2, '0'),
  );
}
function createNumberOptions(length: number): PickerOption[] {
  return Array.from({ length }).map((_, i) => {
    const value = String(i).padStart(2, '0');
    return {
      label: value,
      value: value,
    };
  });
}

export default App;
`},79868:function(e,n){n.Z=`import { PopConfirm, Button } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <PopConfirm content="\u786E\u8BA4\u8981\u5220\u9664\uFF1F">
      <Button>\u5220\u9664</Button>
    </PopConfirm>
  );
};

export default App;
`},41091:function(e,n){n.Z=`import { PopConfirm, useMessage, Button, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const message = useMessage();
  const [loading, setLoading] = useState(false);

  return (
    <Space>
      <PopConfirm
        onConfirm={() => {
          setLoading(true);
          message.info('\u786E\u8BA4\u5220\u9664\uFF0C\u7A0D\u7B49...');
          const p = new Promise<void>((resolve) => {
            setTimeout(resolve, 3000);
          });
          p.then(() => {
            setLoading(false);
            message.success('\u5220\u9664\u6210\u529F\uFF01');
          });
          return p;
        }}
        onCancel={() => message.info('\u70B9\u51FB\u53D6\u6D88')}
        confirmProps={{ loading }}
        content="\u786E\u8BA4\u8981\u5220\u9664\uFF1F"
      >
        <Button>\u5220\u9664</Button>
      </PopConfirm>
      <PopConfirm
        confirmProps={{
          attrs: { onClick: () => message.info('click confirm') },
        }}
        cancelProps={{ attrs: { onClick: () => message.info('click cancel') } }}
        onCancel={() => message.info('\u70B9\u51FB\u53D6\u6D88')}
        onConfirm={() => Promise.reject()}
        content="\u786E\u8BA4\u8981\u5220\u9664\uFF1F"
      >
        <Button>\u5220\u9664</Button>
      </PopConfirm>
    </Space>
  );
};

export default App;
`},65857:function(e,n){n.Z=`import { PopConfirm, Button, Icons, Space, Icon } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space>
      <PopConfirm
        icon={
          <Icon color="red">
            <Icons.CircleWarningFill />
          </Icon>
        }
        content="\u786E\u8BA4\u8981\u5220\u9664\uFF1F"
      >
        <Button>\u81EA\u5B9A\u4E49\u56FE\u6807</Button>
      </PopConfirm>

      <PopConfirm content="\u786E\u8BA4\u8981\u5220\u9664\uFF1F" icon={null}>
        <Button>\u65E0\u56FE\u6807</Button>
      </PopConfirm>
    </Space>
  );
};

export default App;
`},20142:function(e,n){n.Z=`import { PopConfirm, Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space>
      <PopConfirm
        cancelProps={{ children: 'No, Thanks' }}
        attrs={{ style: { width: '220px' } }}
        confirmProps={{ children: 'ok' }}
        content="\u786E\u8BA4\u8981\u5220\u9664\uFF1F"
      >
        <Button>\u81EA\u5B9A\u4E49\u6587\u6848</Button>
      </PopConfirm>

      <PopConfirm cancelProps={null} placement="bottom" content="\u786E\u8BA4\u8981\u5220\u9664\uFF1F">
        <Button>\u53EA\u6709\u786E\u8BA4</Button>
      </PopConfirm>

      <PopConfirm
        content="\u786E\u8BA4\u8981\u5220\u9664\uFF1F\u786E\u8BA4\u8981\u5220\u9664\uFF1F\u786E\u8BA4\u8981\u5220\u9664\uFF1F\u786E\u8BA4\u8981\u5220\u9664\uFF1F\u786E\u8BA4\u8981\u5220\u9664\uFF1F"
        attrs={{ style: { width: '220px' } }}
        placement="left-start"
        confirmProps={null}
      >
        <Button>\u53EA\u6709\u53D6\u6D88</Button>
      </PopConfirm>
    </Space>
  );
};

export default App;
`},39250:function(e,n){n.Z=`import { Popover, Button } from '@tool-pack/react-ui';
import React, { useEffect, useRef } from 'react';

const App: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setTimeout(() => {
      el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;
      el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
    }, 500);
  }, []);
  return (
    <div
      style={{
        position: 'relative',
        alignItems: 'center',
        background: 'cyan',
        overflow: 'hidden',
        height: '200px',
      }}
      ref={rootRef}
    >
      <div style={{ overflow: 'auto', height: '200px' }} ref={scrollerRef}>
        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            display: 'flex',
            height: '300%',
            width: '300%',
          }}
        >
          <Popover
            appendTo={() => rootRef.current || document.body}
            attrs={{ style: { width: '200px' } }}
            content={'\u6E32\u67D3\u5728\u6307\u5B9A\u7684html\u5143\u7D20\u5185'}
            trigger="click"
          >
            <Button attrs={{ id: 'btn1' }}>click</Button>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default App;
`},44868:function(e,n){n.Z=`import { Popover } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Popover content="\u4E0D\u5982\u987B\u81FE\u4E4B\u6240\u5B66\u4E5F">
        <span>\u543E\u5C1D\u7EC8\u65E5\u800C\u601D\u77E3</span>
      </Popover>
      \uFF1B
      <Popover content={<span>\u4E0D\u5982\u767B\u9AD8\u4E4B\u535A\u89C1\u4E5F</span>}>
        <span>\u543E\u5C1D\u8DC2\u800C\u671B\u77E3</span>
      </Popover>
    </>
  );
};

export default App;
`},35145:function(e,n){n.Z=`import { Popover } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <Popover trigger="contextmenu" content="test">
        <div
          style={{
            justifyContent: 'center',
            background: 'deeppink',
            alignItems: 'center',
            display: 'flex',
            height: '200px',
          }}
        >
          \u9F20\u6807\u53F3\u51FB
        </div>
      </Popover>
    </div>
  );
};

export default App;
`},9389:function(e,n){n.Z=`import { Popover, Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space>
      <Popover content="\u5F00\u542F\u5EF6\u65F6500ms" delay={500}>
        <Button>\u8FDB\u5165\u5EF6\u65F6</Button>
      </Popover>
      <Popover leaveDelay={2000} content="\u5173\u95ED\u5EF6\u65F62s">
        <Button>\u79BB\u53BB\u5EF6\u65F6</Button>
      </Popover>
    </Space>
  );
};

export default App;
`},70595:function(e,n){n.Z=`import { Popover, Button, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const triggers = ['hover', 'click'] as const;

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);
  return (
    <Space vertical>
      <label>
        <input
          onChange={(e) => setDisabled(e.target.checked)}
          checked={disabled}
          type="checkbox"
        />
        disabled
      </label>
      <Space>
        {triggers.map((trigger) => (
          <Popover
            disabled={disabled}
            trigger={trigger}
            content={trigger}
            key={trigger}
          >
            <Button>{trigger + ' \u89E6\u53D1'}</Button>
          </Popover>
        ))}
        <Popover disabled={disabled} trigger="focus" content="focus">
          <input placeholder="focus \u89E6\u53D1" type="text" />
        </Popover>
        <Popover
          content="\u4F7F\u7528 visible \u4F20\u53C2\uFF0C\u5916\u90E8\u63A7\u5236\u663E\u793A\u9690\u85CF"
          disabled={disabled}
          visible={visible}
        >
          <Button onClick={() => setVisible((v) => !v)}>\u81EA\u5B9A\u4E49</Button>
        </Popover>
      </Space>
    </Space>
  );
};

export default App;
`},81227:function(e,n){n.Z=`import { Divider, Popover, Button } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const openLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: '10vh',
          right: '10vw',
          zIndex: 10,
        }}
      >
        <div>fixed</div>
        <Popover content="\u4E0D\u5982\u987B\u81FE\u4E4B\u6240\u5B66\u4E5F" placement="right">
          <div>\u543E\u5C1D\u7EC8\u65E5\u800C\u601D\u77E3\uFF1B</div>
        </Popover>
        <Popover
          attrs={{ style: { width: 'max-content' } }}
          content={<span>\u4E0D\u5982\u767B\u9AD8\u4E4B\u535A\u89C1\u4E5F</span>}
          viewport={() => document.body}
          placement="right"
          appendTo={null}
        >
          <div style={{ position: 'relative' }}>\u543E\u5C1D\u8DC2\u800C\u671B\u77E3</div>
        </Popover>
      </div>
      <div style={{ transform: 'translateZ(0)' }}>
        <div style={{ height: '20px' }}></div>
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'fixed',
              left: '10px',
              top: '2px',
              zIndex: 10,
            }}
          >
            <Popover
              content={
                <div>
                  <Button onClick={openLoading} loading={loading}>
                    123123
                  </Button>
                </div>
              }
              attrs={{ style: { width: 'max-content' } }}
              placement="left"
              trigger="click"
            >
              <div style={{ display: 'inline-block', position: 'relative' }}>
                fake fixed click
              </div>
            </Popover>
            <Divider vertical />
            <Popover
              content={
                <div>
                  <Button onClick={openLoading} loading={loading}>
                    123123
                  </Button>
                </div>
              }
              attrs={{ style: { width: 'max-content' } }}
              placement="right"
              trigger="hover"
            >
              <div style={{ display: 'inline-block', position: 'relative' }}>
                fake fixed hover
              </div>
            </Popover>
            <Divider vertical />
            <Popover
              content={
                <div>
                  <Button onClick={openLoading} loading={loading}>
                    123123
                  </Button>
                </div>
              }
              attrs={{ style: { width: 'max-content' } }}
              placement="bottom"
              trigger="focus"
            >
              <button style={{ display: 'inline-block', position: 'relative' }}>
                fake fixed focus
              </button>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
`},64594:function(e,n){n.Z=`import { Popover, Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space>
      <Popover
        content={
          <Popover content="\u7236\u5B50\u7A97\u4F53\u76F8\u4E92\u72EC\u7ACB" placement="right">
            <span>hover~</span>
          </Popover>
        }
        attrs={{ style: { width: '100px' } }}
      >
        <Button>\u666E\u901A\u5D4C\u5957</Button>
      </Popover>
      <Popover
        content={
          <Popover
            attrs={{ style: { width: 'max-content' } }}
            // \u867D\u7136\u5B50\u7A97\u4F53\u5D4C\u5165\u4E86\u5185\u90E8\uFF0C\u4F46\u662F\u5224\u65AD\u65B9\u4F4D\u8FD8\u662F\u9700\u8981\u6307\u5B9A\u4E3A\u5916\u90E8\u89C6\u53E3
            viewport={() => document.body}
            content="\u5B50\u7A97\u4F53\u5D4C\u5165\u7236\u7A97\u4F53\u5185\u90E8"
            placement="right"
            // appendTo \u4E3A null \u65F6\u7A97\u4F53\u4F1A\u63D2\u5165 span \u5185\u90E8
            appendTo={null}
          >
            <span style={{ position: 'relative' }}>hover~</span>
          </Popover>
        }
        attrs={{ style: { width: '100px' } }}
      >
        <Button>\u5185\u90E8\u5D4C\u5957</Button>
      </Popover>
    </Space>
  );
};

export default App;
`},10769:function(e,n){n.Z=`import {
  useMessageHolder,
  Popover,
  Button,
  Switch,
  Space,
} from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [message, holder] = useMessageHolder();
  const [visible, setVisible] = useState(false);
  return (
    <>
      {holder}
      <Space gap={20}>
        <Popover
          onVisibleChange={(visible) => {
            message[visible ? 'success' : 'error']('visible:' + visible);
          }}
          content="\u5185\u90E8\u4E8B\u4EF6\u542F\u52A8\u7684\u4F1A\u89E6\u53D1 onVisibleChange"
        >
          <Button>hover me</Button>
        </Popover>

        <Popover
          onVisibleChange={(visible) => {
            message[visible ? 'success' : 'error']('visible:' + visible);
          }}
          content="\u7531\u5916\u90E8\u4F20\u5165\u7684 visible \u5E76\u4E0D\u4F1A\u89E6\u53D1 onVisibleChange"
          placement="bottom"
          visible={visible}
        >
          <Switch onChange={setVisible} checked={visible} />
        </Popover>
      </Space>
    </>
  );
};

export default App;
`},48721:function(e,n){n.Z=`.root {
  position: relative;
  min-height: 230px;
  > section {
    position: absolute;
    &:nth-child(1),
    &:nth-child(3) {
      left: 40px;
      justify-content: center;
      width: 180px;
    }
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: var(--t-size);
      left: 216px;
      align-items: flex-start;
    }
    &:nth-child(3) {
      top: 160px;
    }
    &:nth-child(4) {
      top: var(--t-size);
      left: 0;
      align-items: flex-end;
    }
  }
}
`},43412:function(e,n){n.Z=`import { PLACEMENTS_12, Popover, Button, Space } from '@tool-pack/react-ui';
import styles from './placement.module.scss';
import { chunk } from '@tool-pack/basic';
import React from 'react';

const App: React.FC = () => {
  const chunks = chunk(PLACEMENTS_12, 3);
  return (
    <div className={styles['root']}>
      {chunks.map((c, i) => (
        <Space vertical={(i + 1) % 2 === 0} key={i}>
          {c.map((p) => (
            <Popover placement={p} content={p} key={p}>
              <Button style={{ lineHeight: '1em' }}>
                {p.includes('-') ? (p[0] + p.at(-1)!).toUpperCase() : p}
              </Button>
            </Popover>
          ))}
        </Space>
      ))}
    </div>
  );
};

export default App;
`},78186:function(e,n){n.Z=`.root {
  position: relative;
  overflow: auto;
  width: 300px;
  height: 60px;
  > section {
    position: absolute;
    &:nth-child(1) {
      top: 0;
      left: 80px;
      justify-content: center;
      width: 286px;
    }
    &:nth-child(2) {
      top: var(--t-size);
      left: 366px;
      align-items: flex-start;
    }
    &:nth-child(3) {
      top: 160px;
      left: 80px;
      justify-content: center;
      width: 286px;
    }
    &:nth-child(4) {
      top: var(--t-size);
      left: 0;
      align-items: flex-end;
    }
  }
}
`},46621:function(e,n){n.Z=`import { PLACEMENTS_12, Popover, Button, Space } from '@tool-pack/react-ui';
import styles from './scroll.module.scss';
import { chunk } from '@tool-pack/basic';
import React from 'react';

const App: React.FC = () => {
  const chunks = chunk(PLACEMENTS_12, 3);
  return (
    <div className={styles['root']}>
      {chunks.map((c, i) => (
        <Space vertical={(i + 1) % 2 === 0} key={i}>
          {c.map((p) => (
            <Popover placement={p} content={p} key={p}>
              <Button style={{ lineHeight: '1em' }}>{p}</Button>
            </Popover>
          ))}
        </Space>
      ))}
    </div>
  );
};

export default App;
`},31827:function(e,n){n.Z=`import { Popover, Button, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const triggers = ['hover', 'click'] as const;

const App: React.FC = () => {
  const [visible, setVisible] = useState(true);
  return (
    <Space style={{ paddingTop: '30px' }}>
      {triggers.map((trigger) => (
        <Popover trigger={trigger} content={trigger} key={trigger}>
          <Button>{trigger + ' \u89E6\u53D1'}</Button>
        </Popover>
      ))}
      <Popover trigger="focus" content="focus">
        <input placeholder="focus \u89E6\u53D1" type="text" />
      </Popover>
      <Popover content="\u4F7F\u7528 visible \u4F20\u53C2\uFF0C\u5916\u90E8\u63A7\u5236\u663E\u793A\u9690\u85CF" visible={visible}>
        <Button onClick={() => setVisible((v) => !v)}>\u81EA\u5B9A\u4E49</Button>
      </Popover>
    </Space>
  );
};

export default App;
`},13240:function(e,n){n.Z=`import { Popover, Button } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Popover content="\u5BBD\u5EA6\u4E0E\u6309\u94AE\u4E00\u81F4" trigger="click" widthByTrigger>
      <Button>click me\uFF5E\uFF5E</Button>
    </Popover>
  );
};

export default App;
`},99347:function(e,n){n.Z=`.root {
  :global {
    .boxes-wrapper {
      position: relative;
      min-height: 250px;
    }
    .box {
      position: absolute;
      padding: 20px;
      width: 80px;
      height: 80px;
      background: rgb(222 133 210 / 62%);
    }
    .nest-box {
      position: relative;
      padding: 20px;
      height: 80px;
      background: rgb(222 133 210 / 62%);
      > .inner-box {
        position: relative;
        width: auto;
        height: 100%;
        background-color: lightblue;
      }
    }
    .pos-origin {
      position: relative;
    }
    .pos-top-right {
      top: 0;
      right: 0;
    }
    .pos-bottom-left {
      bottom: 0;
      left: 0;
    }
    .pos-bottom-right {
      right: 0;
      bottom: 0;
    }
    .flex-demo {
      margin-top: 36px;
    }
    .flex-demo-box {
      display: flex;
      align-items: center;
      height: 120px;
      background-color: whitesmoke;
      > div {
        height: 100px;
      }
      .left {
        position: relative;
        width: 50%;
        background-color: rgb(245 244 171 / 68%);
      }
      .right {
        flex: 1;
        background-color: wheat;
      }
    }
  }
}
`},22068:function(e,n){n.Z=`import { Resizer } from '@tool-pack/react-ui';
import styles from './basic.module.scss';
import React from 'react';

const App: React.FC = () => {
  return (
    <div className={styles['root']}>
      \u9F20\u6807\u79FB\u81F3\u4E0B\u9762\u56DB\u4E2A\u76D2\u5B50\u8FB9\u6846\u5904\u62D6\u52A8\uFF0C\u53EF\u8C03\u6574\u76D2\u5B50\u5927\u5C0F\u3002
      <div className="boxes-wrapper">
        <div className="box pos-origin">
          <Resizer />
          <Resizer placement="right" />
        </div>
        <div className="box pos-top-right">
          <Resizer />
          <Resizer placement="left" />
        </div>
        <div className="box pos-bottom-left">
          <Resizer placement="top" />
          <Resizer placement="right" />
        </div>
        <div className="box pos-bottom-right">
          <Resizer placement="top" />
          <Resizer placement="left" />
        </div>
      </div>
      <div className="flex-demo">
        \u9F20\u6807\u79FB\u81F3\u4E0B\u9762\u4E24\u4E2A\u8272\u5757\u4E4B\u95F4\u62D6\u52A8\uFF0C\u53EF\u8C03\u6574\u76D2\u5B50\u5927\u5C0F\u3002
        <div className="flex-demo-box">
          <div className="left">
            <Resizer placement="right" />
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
`},5138:function(e,n){n.Z=`import { Resizer } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <span
        style={{ background: 'rgb(222 133 210 / 62%)', position: 'relative' }}
      >
        \u6211\u662F\u884C\u5185\u5143\u7D20
        <br />
        \u6211\u662F\u884C\u5185\u5143\u7D20
        <Resizer />
        <Resizer placement="right" />
      </span>
    </div>
  );
};

export default App;
`},66832:function(e,n){n.Z=`import { Resizer } from '@tool-pack/react-ui';
import styles from './basic.module.scss';
import React from 'react';

const App: React.FC = () => {
  return (
    <div className={styles['root']}>
      <div className="flex-demo">
        \u9F20\u6807\u79FB\u81F3\u4E0B\u9762\u4E24\u4E2A\u8272\u5757\u4E4B\u95F4\u62D6\u52A8\uFF0C\u53EF\u8C03\u6574\u76D2\u5B50\u5927\u5C0F\u3002\u5DE6\u8FB9\u5BBD\u5EA6\u9650\u5236\u5728[50\uFF0C600]\u4E4B\u95F4
        <div className="flex-demo-box">
          <div className="left">
            <Resizer placement="right" max={600} min={50} />
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
`},49139:function(e,n){n.Z=`import { Resizer } from '@tool-pack/react-ui';
import styles from './basic.module.scss';
import React from 'react';

const App: React.FC = () => {
  return (
    <div className={styles['root']}>
      <div className="nest-box">
        <div className="inner-box">
          <Resizer />
          <Resizer placement="right" />
        </div>
        <Resizer />
        <Resizer placement="right" />
      </div>
    </div>
  );
};

export default App;
`},63426:function(e,n){n.Z=`import { useMessageHolder, Resizer } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const [message, holder] = useMessageHolder();
  return (
    <div>
      {holder}
      <div
        style={{
          background: 'rgb(222 133 210 / 62%)',
          position: 'relative',
          height: '10px',
        }}
      >
        <Resizer onResized={() => message.info('resized')} />
      </div>
    </div>
  );
};

export default App;
`},60100:function(e,n){n.Z=`import { SelectOptionsItem, Select } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const options: SelectOptionsItem[] = [
  {
    label: 'foo',
    value: 1,
  },
  {
    label: 'bar',
    value: 2,
  },
];
const App: React.FC = () => {
  const [value, setValue] = useState(1);
  return (
    <>
      <Select
        onChange={(selected, options) => {
          setValue(selected);
          console.log('selected ', value, selected, options);
        }}
        placeholder="select"
        options={options}
        value={value}
      />
      <br />
      <Select placeholder="select" options={options} value={value} disabled />
    </>
  );
};

export default App;
`},16480:function(e,n){n.Z=`import {
  SelectOptionsItem,
  useMessageHolder,
  Select,
} from '@tool-pack/react-ui';
import React from 'react';

const options: SelectOptionsItem[] = Array.from({ length: 20 }).map((_, i) => ({
  label: String(i),
  value: i,
}));
const App: React.FC = () => {
  const [message, holder] = useMessageHolder();
  const onClear = () => message.success('clear');
  return (
    <>
      {holder}
      <Select
        placeholder="select"
        options={options}
        onClear={onClear}
        clearable
      />
      <br />
      <Select
        placeholder="multiple select"
        options={options}
        onClear={onClear}
        clearable
        multiple
      />
    </>
  );
};

export default App;
`},52297:function(e,n){n.Z=`import type {
  SelectControllerRef,
  SelectOptionsItem,
} from '@tool-pack/react-ui';
import { useMessageHolder, Button, Select, Space } from '@tool-pack/react-ui';
import React, { useRef } from 'react';

const options: SelectOptionsItem[] = [
  {
    label: 'foo',
    value: 1,
  },
  {
    label: 'bar',
    value: 2,
  },
];
const App: React.FC = () => {
  const controllerRef = useRef<SelectControllerRef>(null);
  const [message, holder] = useMessageHolder();

  return (
    <Space>
      {holder}
      <Button
        onClick={() => {
          const controller = controllerRef.current;
          if (!controller) return;
          controller.focus();
          setTimeout(controller.blur, 2000);
        }}
      >
        \u805A\u7126\u5E76\u4E14 2 \u79D2\u540E\u5931\u6548
      </Button>
      <Select
        onFocus={() => {
          message.success('focus');
        }}
        onBlur={() => {
          message.error('blur');
        }}
        attrs={{ style: { flex: 1 } }}
        controllerRef={controllerRef}
        placeholder="select"
        options={options}
      />
    </Space>
  );
};

export default App;
`},10197:function(e,n){n.Z=`import {
  SelectOptionsItem,
  SelectOption,
  Select,
  Icons,
  Space,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const options: SelectOptionsItem[] = Object.keys(Icons).map((key, index) => {
  const Ico = Icons[key as keyof typeof Icons];
  const RenderedIcon = (
    <Icon>
      <Ico />
    </Icon>
  );
  return {
    label: (selected, option) => {
      if (selected) {
        return (
          <Space gap={2}>
            {RenderedIcon}
            <span>{option.value}</span>
          </Space>
        );
      }
      // option
      return (
        <Space gap={6}>
          <span
            style={{ textAlign: 'right', flex: '0 0 20px', color: '#949494' }}
          >
            {index + 1}
          </span>
          {RenderedIcon}
        </Space>
      );
    },
    extra: <span style={{ color: '#c7c7c7' }}>{key} </span>,
    value: key,
  };
});

function filter(pattern: string, option: SelectOption): boolean {
  return (option.value as string).toLowerCase().includes(pattern.toLowerCase());
}
const App: React.FC = () => {
  return (
    <>
      <Select placeholder="select" options={options} />
      <br />
      <Select
        placeholder="select with filterable"
        options={options}
        filter={filter}
        filterable
      />
      <br />
      <Select
        placeholder="multiple select"
        options={options}
        maxTagCount={1}
        multiple
      />
      <br />
      <Select
        placeholder="multiple select with filterable"
        options={options}
        maxTagCount={1}
        filter={filter}
        filterable
        multiple
      />
    </>
  );
};

export default App;
`},49891:function(e,n){n.Z=`import {
  SelectOptionsItem,
  Select,
  Icons,
  Space,
  Icon,
} from '@tool-pack/react-ui';
import React, { useState } from 'react';

const options1: SelectOptionsItem[] = [
  {
    label: 'foo',
    value: 1,
  },
  {
    label: 'bar',
    value: 2,
  },
];

const options2: SelectOptionsItem[] = Object.keys(Icons)
  .slice(0, 5)
  .map((key, index) => {
    const Ico = Icons[key as keyof typeof Icons];
    const RenderedIcon = (
      <Icon>
        <Ico />
      </Icon>
    );
    return {
      label: (selected, option) => {
        if (selected) {
          return (
            <Space gap={2}>
              {RenderedIcon}
              <span>{option.value}</span>
            </Space>
          );
        }
        // option
        return (
          <Space gap={6}>
            <span
              style={{
                textAlign: 'right',
                flex: '0 0 20px',
                color: '#949494',
              }}
            >
              {index + 1}
            </span>
            {RenderedIcon}
          </Space>
        );
      },
      extra: <span style={{ color: '#c7c7c7' }}>{key} </span>,
      value: key,
    };
  });

const App: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <>
      <Select placeholder="select" options={options1} filterable clearable />
      <br />
      <Select
        placeholder="multiple select"
        options={options1}
        filterable
        multiple
      />
      <br />
      <Select
        filter={(pattern, option) => {
          const v = option.value;
          if (!v.toLowerCase().includes(pattern.toLowerCase())) return false;
          return !value.includes(v);
        }}
        onChange={setValue}
        placeholder="\u9690\u85CF\u5DF2\u9009"
        options={options2}
        value={value}
        filterable
        multiple
      />
    </>
  );
};

export default App;
`},69866:function(e,n){n.Z=`import { SelectOptionsItem, Select } from '@tool-pack/react-ui';
import React from 'react';

const options: SelectOptionsItem[] = [
  {
    children: [
      ...Array.from({ length: 10 }).map((_, i) => ({
        label: String(i),
        value: i,
      })),
      {
        children: Array.from({ length: 10 }).map((_, i) => ({
          label: String(i + 10),
          value: i + 10,
        })),
        label: '[10, 20)',
        key: '[10, 20)',
        type: 'group',
      },
    ],
    label: '[0, 20)',
    key: '[0, 20)',
    type: 'group',
  },
  { type: 'divider', key: 'd1' },
  {
    children: Array.from({ length: 10 }).map((_, i) => ({
      label: String(i + 20),
      value: i + 20,
    })),
    label: '[20, 30)',
    key: '[20, 30)',
    type: 'group',
  },
];
const App: React.FC = () => {
  return (
    <>
      <Select placeholder="select" options={options} filterable />
      <br />
      <Select
        placeholder="multiple select"
        options={options}
        filterable
        multiple
      />
    </>
  );
};

export default App;
`},16666:function(e,n){n.Z=`import { SelectOptionsItem, Select, Icons } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const options: SelectOptionsItem[] = [
  {
    label: 'foo',
    value: 1,
  },
  {
    label: 'bar',
    value: 2,
  },
];
const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Select
      icon={visible ? <Icons.Close /> : <Icons.CircleWarningFill />}
      onVisibleChange={setVisible}
      placeholder="select"
      options={options}
      clearable
    />
  );
};

export default App;
`},82744:function(e,n){n.Z=`import { SelectOptionsItem, Select } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const options: SelectOptionsItem[] = Array.from({ length: 20 }).map((_, i) => ({
  label: String(i),
  value: i,
}));
const App: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <Select
      onChange={(values, options) => {
        setValue(value);
        console.log(values, options);
      }}
      placeholder={'test'}
      options={options}
      maxTagCount={2}
      value={value}
      multiple
    />
  );
};

export default App;
`},36990:function(e,n){n.Z=`import { SelectOptionsItem, Select } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const options: SelectOptionsItem[] = Array.from({ length: 20 }).map((_, i) => ({
  label: String(i),
  value: i,
}));
const App: React.FC = () => {
  const [value, setValue] = useState([1, 15]);
  return (
    <>
      <Select
        onChange={(values, options) => {
          setValue(value);
          console.log(values, options);
        }}
        options={options}
        value={value}
        multiple
      />
      <br />
      <Select
        onChange={(values, options) => {
          setValue(value);
          console.log(values, options);
        }}
        options={options}
        value={value}
        disabled
        multiple
      />
    </>
  );
};

export default App;
`},56315:function(e,n){n.Z=`import { SelectOption, Select, Icons, Space, Icon } from '@tool-pack/react-ui';
import React, { useState, useRef } from 'react';

const Options: SelectOption[] = Object.keys(Icons).map((key, index) => {
  const Ico = Icons[key as keyof typeof Icons];
  const RenderedIcon = (
    <Icon>
      <Ico />
    </Icon>
  );
  return {
    label: (selected, option) => {
      if (selected) {
        return (
          <Space gap={2}>
            {RenderedIcon}
            <span>{option.value}</span>
          </Space>
        );
      }
      // option
      return (
        <Space gap={6}>
          <span
            style={{ textAlign: 'right', flex: '0 0 20px', color: '#949494' }}
          >
            {index + 1}
          </span>
          {RenderedIcon}
        </Space>
      );
    },
    extra: <span style={{ color: '#c7c7c7' }}>{key} </span>,
    value: key,
  };
});

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [mValue, setMValue] = useState([]);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<SelectOption[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  return (
    <>
      <Select
        placeholder="select"
        onChange={setValue}
        onSearch={onSearch}
        loading={loading}
        options={options}
        value={value}
        remote
      />
      <br />
      <Select
        placeholder="select multiple"
        onChange={setMValue}
        onSearch={onSearch}
        loading={loading}
        options={options}
        value={mValue}
        multiple
        remote
      />
    </>
  );

  function onSearch(p: string): void {
    setLoading(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const options = p
        ? Options.filter((opt) =>
            (opt.value as string).toLowerCase().includes(p.toLowerCase()),
          )
        : [];
      setOptions(options);
      setLoading(false);
    }, 1500);
  }
};

export default App;
`},57040:function(e,n){n.Z=`import { SelectOptionsItem, Select } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const options: SelectOptionsItem[] = [
  {
    label: 'foo',
    value: 1,
  },
  {
    label: 'bar',
    value: 2,
  },
];
const App: React.FC = () => {
  const [value, setValue] = useState<number>(2);
  return (
    <>
      <Select
        placeholder="select"
        onChange={setValue}
        options={options}
        value={value}
        size="small"
      />
      <br />
      <Select
        placeholder="select"
        onChange={setValue}
        options={options}
        size="medium"
        value={value}
      />
      <br />
      <Select
        placeholder="select"
        onChange={setValue}
        options={options}
        value={value}
        size="large"
      />
    </>
  );
};

export default App;
`},50853:function(e,n){n.Z=`import { SelectOptionsItem, Select } from '@tool-pack/react-ui';
import React from 'react';

const options: SelectOptionsItem[] = Array.from({ length: 20 }).map((_, i) => ({
  label: String(i),
  value: i,
}));
const App: React.FC = () => {
  return (
    <>
      <Select
        header={<div style={{ padding: '10px' }}>header \u63D2\u69FD</div>}
        placeholder="header"
        options={options}
      />
      <br />
      <Select
        footer={<div style={{ padding: '10px' }}>footer \u63D2\u69FD</div>}
        placeholder="footer"
        options={options}
      />
    </>
  );
};

export default App;
`},34245:function(e,n){n.Z=`import { SelectOptionsItem, Select } from '@tool-pack/react-ui';
import React from 'react';

const options: SelectOptionsItem[] = [
  {
    label: 'foo',
    value: 1,
  },
  {
    label: 'bar',
    value: 2,
  },
];
const App: React.FC = () => {
  return (
    <>
      <Select placeholder="select" options={options} status="warning" />
      <br />
      <Select placeholder="select" options={options} status="error" />
    </>
  );
};

export default App;
`},57274:function(e,n){n.Z=`import { Slider } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState(50);
  return (
    <>
      <Slider
        onChange={(v) => {
          setValue(v);
        }}
        value={value}
      />
      {value}
    </>
  );
};

export default App;
`},78415:function(e,n){n.Z=`import { Slider, Switch } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <>
      disabled:
      <Switch onChange={setDisabled} checked={disabled} size="small" />
      <Slider disabled={disabled} value={55} />
    </>
  );
};

export default App;
`},59268:function(e,n){n.Z=`import { Slider } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Slider formatter={(value) => value + '%'} tooltip="always" value={50} />
    </>
  );
};

export default App;
`},70643:function(e,n){n.Z=`import { Slider } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<number[]>([0, 30, 50, 60, 100]);
  return (
    <>
      <Slider onChange={(v) => setValue(v)} keepRangeSorted value={value} />
      <br />[{value.toString()}]
    </>
  );
};

export default App;
`},66222:function(e,n){n.Z=`import { Slider, Switch } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState(50);
  const [keyboard, setKeyboard] = useState(true);
  return (
    <>
      keyboard:
      <Switch onChange={setKeyboard} checked={keyboard} size="small" />
      <Slider
        onChange={(v) => {
          setValue(v);
        }}
        keyboard={keyboard}
        value={value}
      />
      {value}
    </>
  );
};

export default App;
`},78082:function(e,n){n.Z=`import { SliderMarks, Tooltip, Slider } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const marks: SliderMarks = {
  70: {
    label: (
      <Tooltip title="\u4ECE\u5FC3\u6240\u6B32\u4E0D\u903E\u77E9">
        <span style={{ color: 'pink' }}>\u4ECE\u2026\u77E9</span>
      </Tooltip>
    ),
  },
  50: { reverse: true, label: '\u77E5\u5929\u547D' },
  60: { label: '\u8033\u987A' },
  40: { label: '\u4E0D\u60D1' },
  30: { label: '\u800C\u7ACB' },
};
const App: React.FC = () => {
  const [value, setValue] = useState<[number, number]>([30, 70]);
  return (
    <>
      <Slider onChange={(v) => setValue(v)} value={value} marks={marks} />
      <div style={{ textAlign: 'center', height: '200px' }}>
        <Slider
          onChange={(v) => setValue(v)}
          value={value}
          marks={marks}
          vertical
        />
        <Slider
          attrs={{ style: { marginLeft: '150px' } }}
          onChange={(v) => setValue(v)}
          value={value}
          marks={marks}
          vertical
          reverse
        />
      </div>
      <Slider
        onChange={(v) => setValue(v)}
        value={value}
        marks={marks}
        reverse
      />
      <Slider value={value} marks={marks} disabled />
      <br />[{value.toString()}]
    </>
  );
};

export default App;
`},59938:function(e,n){n.Z=`import { Slider } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<[number, number]>([20, 50]);
  return (
    <>
      <Slider onChange={(v) => setValue(v)} value={value} />
      <div style={{ textAlign: 'center', height: '150px' }}>
        <Slider onChange={(v) => setValue(v)} value={value} vertical />
        <Slider
          attrs={{ style: { marginLeft: '150px' } }}
          onChange={(v) => setValue(v)}
          value={value}
          vertical
          reverse
        />
      </div>
      <Slider onChange={(v) => setValue(v)} value={value} reverse />
      <br />[{value.toString()}]
    </>
  );
};

export default App;
`},31301:function(e,n){n.Z=`import { Slider } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<number[]>([20, 50, 60, 90]);
  return (
    <>
      <Slider onChange={(v) => setValue(v)} value={value} />
      <br />[{value.toString()}]
    </>
  );
};

export default App;
`},11505:function(e,n){n.Z=`import { Slider } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return <Slider value={25} reverse />;
};

export default App;
`},73432:function(e,n){n.Z=`import { SliderMarks, Slider } from '@tool-pack/react-ui';
import React from 'react';

const marks: SliderMarks = {
  100: { label: '100\xB0C' },
  83: { label: '83\xB0C' },
  50: { label: '50\xB0C' },
  35: { label: '35\xB0C' },
  20: { label: '20\xB0C' },
};
const App: React.FC = () => {
  return (
    <>
      <Slider marks={marks} step="mark" value={20} />
      <Slider value={[20, 50]} marks={marks} step="mark" />
    </>
  );
};

export default App;
`},70078:function(e,n){n.Z=`import { Slider } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      step = 0.1
      <Slider value={20} step={0.1} />
      step = 3
      <Slider value={21} step={3} />
      step = 10
      <Slider value={50} step={10} />
    </div>
  );
};

export default App;
`},42745:function(e,n){n.Z=`import { Slider } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState(50);
  return (
    <>
      tooltip=true [default]
      <Slider tooltip={true} value={30} />
      tooltip=false {value}
      <Slider onChange={setValue} tooltip={false} value={value} />
      tooltip=always
      <Slider tooltip="always" value={75} />
    </>
  );
};

export default App;
`},52030:function(e,n){n.Z=`import { Slider } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', height: '200px' }}>
      <Slider value={20} vertical />
      <Slider
        attrs={{ style: { marginLeft: '50px' } }}
        value={50}
        vertical
        disabled
      />
      <Slider
        attrs={{ style: { marginLeft: '50px' } }}
        value={50}
        vertical
        reverse
      />
    </div>
  );
};

export default App;
`},7260:function(e,n){n.Z=`import { Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space>
      <Button type="primary">bt1</Button>
      <Button type="danger">bt2</Button>
    </Space>
  );
};

export default App;
`},69521:function(e,n){n.Z=`import { Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const style: React.CSSProperties = { width: '100px' };
  const style2: React.CSSProperties = { height: '100px' };
  return (
    <Space vertical fill>
      <Space style={{ height: '200px' }} fill>
        <div style={{ ...style, background: '#1677ff', flex: 1 }}></div>
        <div style={{ ...style, background: '#f56c6c' }}></div>
      </Space>
      <Space style={{ width: '100%' }} fillRatio={50} vertical fill>
        <div
          style={{
            ...style2,
            background: '#1677ff',
          }}
        ></div>
        <div style={{ ...style2, background: '#f56c6c' }}></div>
      </Space>
    </Space>
  );
};

export default App;
`},27043:function(e,n){n.Z=`import { Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space gap={20}>
      <Button type="primary">bt1</Button>
      <Button type="danger">bt2</Button>
    </Space>
  );
};

export default App;
`},66435:function(e,n){n.Z=`import { Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const style: React.CSSProperties = { height: '100px', width: '200px' };
  return (
    <Space style={{ background: '#e6a23c' }} vertical inline>
      <div style={{ ...style, background: '#1677ff' }}></div>
      <div style={{ ...style, background: '#f56c6c' }}></div>
    </Space>
  );
};

export default App;
`},26881:function(e,n){n.Z=`import { Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space
      separator={
        <div style={{ background: 'gray', height: '1px', width: '100%' }}></div>
      }
      vertical
    >
      <Space separator="|" tag="div" gap={20}>
        <Button type="primary">bt1</Button>
        <Button type="danger">bt2</Button>
      </Space>
      <Space
        separator={
          <div
            style={{
              background: 'var(--t-primary-bg-color)',
              height: '1em',
              width: '1px',
            }}
          ></div>
        }
        tag="div"
      >
        <Button type="primary">bt1</Button>
        <Button type="danger">bt2</Button>
        <Button type="success">bt3</Button>
      </Space>
      <Space separator={<button disabled>\u4F7F\u7528button\u5206\u9694</button>} tag="div">
        <Button type="primary">bt1</Button>
        <Button type="danger">bt2</Button>
        <Button type="success">bt3</Button>
      </Space>
    </Space>
  );
};

export default App;
`},63462:function(e,n){n.Z=`import { Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space tag="div">
      <Button type="primary">bt1</Button>
      <Button type="danger">bt2</Button>
    </Space>
  );
};

export default App;
`},76305:function(e,n){n.Z=`import { Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const style: React.CSSProperties = { height: '100px', width: '200px' };
  return (
    <Space style={{ background: '#e6a23c' }} vertical>
      <div style={{ ...style, background: '#1677ff' }}></div>
      <div style={{ ...style, background: '#f56c6c' }}></div>
    </Space>
  );
};

export default App;
`},69989:function(e,n){n.Z=`import { Switch } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return <Switch checked />;
};

export default App;
`},92249:function(e,n){n.Z=`import { Switch, Icons, Space, Icon } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space>
      <Switch
        uncheckedChildren={
          <Icon>
            <Icons.Close />
          </Icon>
        }
        checkedChildren="\u2714\uFE0E"
        size="small"
      />
      <Switch
        uncheckedChildren="\u82E5\u975E\u7FA4\u7389\u5C71\u5934\u89C1"
        checkedChildren="\u4F1A\u5411\u7476\u53F0\u6708\u4E0B\u9022"
      />
      <Switch
        uncheckedChildren="\u843D\u971E\u4E0E\u5B64\u9E5C\u9F50\u98DE"
        checkedChildren="\u79CB\u6C34\u5171\u957F\u5929\u4E00\u8272"
        size="large"
        checked
      />
    </Space>
  );
};

export default App;
`},61879:function(e,n){n.Z=`import { Switch, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <Space vertical>
      <Space>
        <span>disabled: </span>
        <Switch onChange={setDisabled} checked={disabled} />
      </Space>
      <Space>
        <Switch disabled={disabled} size="small" />
        <Switch disabled={disabled} checked />
        <Switch disabled={disabled} size="large" />
      </Space>
    </Space>
  );
};

export default App;
`},29865:function(e,n){n.Z=`import { useMessageHolder, Switch } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const [message, holder] = useMessageHolder();
  return (
    <>
      {holder}
      <Switch
        onChange={(checked) => {
          if (checked) message.success('\u5F00\u542F');
          else message.info('\u5173\u95ED');
        }}
      />
    </>
  );
};

export default App;
`},78419:function(e,n){n.Z=`import { Switch, Icons, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <Space>
      <Switch
        checkedIcon={<Icons.CircleSuccessFill />}
        uncheckedIcon={<Icons.CircleCloseFill />}
        uncheckedChildren="false"
        checkedChildren="true"
        size="small"
      />
      <Switch
        checkedIcon={<Icons.CircleSuccessFill />}
        uncheckedIcon={<Icons.CircleCloseFill />}
      />
      <Switch
        attrs={{
          onClickCapture(e) {
            if (loading) return;
            e.stopPropagation();
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setChecked((v) => !v);
            }, 3500);
          },
        }}
        checkedIcon={<Icons.CircleSuccessFill />}
        uncheckedIcon={<Icons.CircleCloseFill />}
        onChange={setChecked}
        checked={checked}
        loading={loading}
        size="large"
      />
    </Space>
  );
};

export default App;
`},34490:function(e,n){n.Z=`import { Switch, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <Space>
      <Switch loading />
      <Switch
        attrs={{
          onClickCapture(e) {
            if (loading) return;
            e.stopPropagation();
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setChecked((v) => !v);
            }, 3500);
          },
        }}
        onChange={setChecked}
        checked={checked}
        loading={loading}
        size="large"
      />
    </Space>
  );
};

export default App;
`},50197:function(e,n){n.Z=`import { Switch, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space>
      <Switch size="small" />
      <Switch size="medium" />
      <Switch size="large" />
    </Space>
  );
};

export default App;
`},37177:function(e,n){n.Z=`import { TagProps, Space, Tag } from '@tool-pack/react-ui';
import React from 'react';
const types = [
  'primary',
  'success',
  'info',
  'warning',
  'error',
] satisfies TagProps['type'][];
const App: React.FC = () => {
  return (
    <Space>
      <Tag>DEFAULT</Tag>
      {types.map((type) => (
        <Tag type={type} key={type}>
          {type.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
`},27482:function(e,n){n.Z=`import { TagProps, Switch, Space, Tag } from '@tool-pack/react-ui';
import React, { useState } from 'react';
const types = [
  'primary',
  'success',
  'info',
  'warning',
  'error',
] satisfies TagProps['type'][];
const App: React.FC = () => {
  const [bordered, setBordered] = useState(false);
  return (
    <Space>
      <Switch onChange={setBordered} checked={bordered} />
      {types.map((type) => (
        <Tag bordered={bordered} type={type} key={type}>
          {type.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
`},94064:function(e,n){n.Z=`import { useMessageHolder, TagProps, Space, Tag } from '@tool-pack/react-ui';
import React from 'react';
const types = [
  'success',
  'info',
  'warning',
  'error',
] satisfies TagProps['type'][];
const App: React.FC = () => {
  const [message, holder] = useMessageHolder();
  return (
    <Space>
      {holder}
      <Tag closeable checkable checked>
        PRIMARY
      </Tag>
      {types.map((type) => (
        <Tag
          onChange={(c) => message[type]('checked:' + c)}
          type={type}
          key={type}
          checkable
        >
          {type.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
`},16567:function(e,n){n.Z=`import { TagProps, Space, Tag } from '@tool-pack/react-ui';
import React from 'react';
const types = [
  'primary',
  'success',
  'info',
  'warning',
  'error',
] satisfies TagProps['type'][];
const App: React.FC = () => {
  return (
    <Space>
      {types.map((type) => (
        <Tag
          onClose={(e) => {
            if (!window.confirm(\`\u662F\u5426\u5173\u95ED '\${type || 'default'}' \u6807\u7B7E\`)) {
              e.preventDefault();
            }
          }}
          type={type}
          key={type}
          closeable
        >
          {type}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
`},16690:function(e,n){n.Z=`import { TagProps, Switch, Space, Tag } from '@tool-pack/react-ui';
import React, { useState } from 'react';
const types = [
  'success',
  'info',
  'warning',
  'error',
] satisfies TagProps['type'][];
const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <Space>
      <Switch onChange={setDisabled} checked={disabled} />
      <Tag disabled={disabled} checkable checked>
        DEFAULT
      </Tag>
      {types.map((type) => (
        <Tag disabled={disabled} type={type} key={type}>
          {type.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
`},11497:function(e,n){n.Z=`import { type TagProps, Space, Icons, Tag } from '@tool-pack/react-ui';
import React from 'react';
const sizes = ['small', 'medium', 'large'] satisfies TagProps['size'][];
const App: React.FC = () => {
  return (
    <Space>
      <Tag icon={<Icons.CircleWarningFill />} type="warning" closeable>
        DEFAULT
      </Tag>
      {sizes.map((size) => (
        <Tag
          icon={<Icons.CircleSuccessFill />}
          type="success"
          size={size}
          key={size}
          closeable
          round
        >
          {size.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
`},63694:function(e,n){n.Z=`import { TagProps, Space, Tag } from '@tool-pack/react-ui';
import React from 'react';

const sizes = ['small', 'medium', 'large'] satisfies TagProps['size'][];
const App: React.FC = () => {
  return (
    <Space>
      {sizes.map((size) => (
        <Tag size={size} key={size} round>
          {size.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
`},26054:function(e,n){n.Z=`import { TagProps, Space, Tag } from '@tool-pack/react-ui';
import React from 'react';
const sizes = ['small', 'medium', 'large'] satisfies TagProps['size'][];
const App: React.FC = () => {
  return (
    <Space>
      <Tag closeable>DEFAULT</Tag>
      {sizes.map((size) => (
        <Tag size={size} key={size} closeable>
          {size.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
`},42645:function(e,n){n.Z=`import { TimelineItemProps, Timeline } from '@tool-pack/react-ui';
import React from 'react';

const items: TimelineItemProps[] = [
  {
    content:
      '\u51FA\u751F\u5165\u6B7B\u3002\u751F\u4E4B\u5F92\u5341\u6709\u4E09\uFF0C\u6B7B\u4E4B\u5F92\u5341\u6709\u4E09\u3002\u4EBA\u4E4B\u751F\u52A8\u4E4B\u6B7B\u5730\uFF0C\u4EA6\u5341\u6709\u4E09\u3002\u592B\u4F55\u6545\uFF1F\u4EE5\u5176\u751F\u751F\u4E4B\u539A\u3002\u76D6\u95FB\u5584\u6444\u751F\u8005\uFF0C\u9646\u884C\u4E0D\u9047\u5155\uFF08s\xEC\uFF09\u864E\uFF0C\u5165\u519B\u4E0D\u88AB\uFF08p\u012B\uFF09\u7532\u5175\uFF0C\u5155\u65E0\u6240\u6295\u5176\u89D2\uFF0C\u864E\u65E0\u6240\u63AA\u5176\u722A\uFF08zh\u01CEo\uFF09\uFF0C\u5175\u65E0\u6240\u5BB9\u5176\u5203\u3002\u592B\u4F55\u6545\uFF1F\u4EE5\u5176\u65E0\u6B7B\u5730\u3002',
    time: '2023-01-01',
    title: '\u7B2C\u4E94\u5341\u7AE0',
  },
  {
    content:
      '\u9053\u751F\u4E4B\uFF0C\u5FB7\u755C\uFF08x\xF9\uFF09\u4E4B\uFF0C\u7269\u5F62\u4E4B\uFF0C\u52BF\u6210\u4E4B\u3002\u662F\u4EE5\u4E07\u7269\u83AB\u4E0D\u5C0A\u9053\u800C\u8D35\u5FB7\u3002\u9053\u4E4B\u5C0A\uFF0C\u5FB7\u4E4B\u8D35\uFF0C\u592B\u83AB\u4E4B\u547D\u800C\u5E38\u81EA\u7136\u3002\u6545\u9053\u751F\u4E4B\uFF0C\u5FB7\u755C\u4E4B\u3002\u957F\u4E4B\u3001\u80B2\u4E4B\u3001\u4EAD\u4E4B\u3001\u6BD2\u4E4B\u3001\u517B\u4E4B\u3001\u8986\u4E4B\u3002\u751F\u800C\u4E0D\u6709\uFF0C\u4E3A\u800C\u4E0D\u6043\uFF0C\u957F\uFF08zh\u01CEng\uFF09\u800C\u4E0D\u5BB0\uFF0C\u662F\u8C13\u7384\u5FB7\u3002',
    time: '2023-01-02',
    title: '\u7B2C\u4E94\u5341\u4E00\u7AE0',
  },
];
const App: React.FC = () => {
  return <Timeline items={items} />;
};

export default App;
`},97646:function(e,n){n.Z=`import { TimelineItem, Timeline } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Timeline>
      <TimelineItem
        content="\u5584\u4E3A\u58EB\u8005\u4E0D\u6B66\uFF0C\u5584\u6218\u8005\u4E0D\u6012\uFF0C\u5584\u80DC\u654C\u8005\u4E0D\u4E0E\uFF0C\u5584\u7528\u4EBA\u8005\u4E3A\u4E4B\u4E0B\u3002\u662F\u8C13\u4E0D\u4E89\u4E4B\u5FB7\uFF0C\u662F\u8C13\u7528\u4EBA\u4E4B\u529B\uFF0C\u662F\u8C13\u914D\u5929\u53E4\u4E4B\u6781\u3002"
        title="\u7B2C\u516D\u5341\u516B\u7AE0"
      />
      <TimelineItem
        content="\u7528\u5175\u6709\u8A00\uFF0C\u543E\u4E0D\u6562\u4E3A\u4E3B\u800C\u4E3A\u5BA2\uFF0C\u4E0D\u6562\u8FDB\u5BF8\u800C\u9000\u5C3A\u3002\u662F\u8C13\u884C\uFF08x\xEDng\uFF09\u65E0\u884C\uFF08h\xE1ng\uFF09\uFF0C\u6518(r\u01CEng)\u65E0\u81C2\uFF0C\u6254\u65E0\u654C\uFF0C\u6267\u65E0\u5175\u3002\u7978\u83AB\u5927\u4E8E\u8F7B\u654C\uFF0C\u8F7B\u654C\u51E0\u4E27\u543E\u5B9D\u3002\u6545\u6297\u5175\u76F8\u52A0\uFF0C\u54C0\u8005\u80DC\u77E3\u3002"
        title="\u7B2C\u516D\u5341\u4E5D\u7AE0"
      />
    </Timeline>
  );
};

export default App;
`},29250:function(e,n){n.Z=`import { TimelineItemProps, Timeline, Icons, Icon } from '@tool-pack/react-ui';
import React from 'react';

const items: TimelineItemProps[] = [
  {
    content:
      '\u5176\u5B89\u6613\u6301\uFF0C\u5176\u672A\u5146\u6613\u8C0B\uFF0C\u5176\u8106\u6613\u6CEE\uFF08p\xE0n\uFF09\uFF0C\u5176\u5FAE\u6613\u6563\u3002\u4E3A\u4E4B\u4E8E\u672A\u6709\uFF0C\u6CBB\u4E4B\u4E8E\u672A\u4E71\u3002\u5408\u62B1\u4E4B' +
      '\u6728\uFF0C\u751F\u4E8E\u6BEB\u672B\uFF1B\u4E5D\u5C42\u4E4B\u53F0\uFF0C\u8D77\u4E8E\u7D2F\u571F\uFF1B\u5343\u91CC\u4E4B\u884C\uFF0C\u59CB\u4E8E\u8DB3\u4E0B\u3002\u4E3A\u8005\u8D25\u4E4B\uFF0C\u6267\u8005\u5931\u4E4B\u3002\u662F\u4EE5\u5723\u4EBA\u65E0\u4E3A\uFF0C\u6545\u65E0' +
      '\u8D25\uFF1B\u65E0\u6267\uFF0C\u6545\u65E0\u5931\u3002\u6C11\u4E4B\u4ECE\u4E8B\uFF0C\u5E38\u4E8E\u51E0\u6210\u800C\u8D25\u4E4B\u3002\u614E\u7EC8\u5982\u59CB\uFF0C\u5219\u65E0\u8D25\u4E8B\u3002\u662F\u4EE5\u5723\u4EBA\u6B32\u4E0D\u6B32\uFF0C\u4E0D\u8D35\u96BE\u5F97\u4E4B\u8D27' +
      '\u3002\u5B66\u4E0D\u5B66\uFF0C\u590D\u4F17\u4EBA\u4E4B\u6240\u8FC7\u3002\u4EE5\u8F85\u4E07\u7269\u4E4B\u81EA\u7136\uFF0C\u800C\u4E0D\u6562\u4E3A\u3002',
    icon: (
      <Icon size={20}>
        <Icons.CircleSuccessFill />
      </Icon>
    ),
    time: '2023-01-01',
    type: 'success',
    title: '\u7B2C\u516D\u5341\u56DB\u7AE0',
  },
  {
    content:
      '\u53E4\u4E4B\u5584\u4E3A\u9053\u8005\uFF0C\u975E\u4EE5\u660E\u6C11\uFF0C\u5C06\u4EE5\u611A\u4E4B\u3002\u6C11\u4E4B\u96BE\u6CBB\uFF0C\u4EE5\u5176\u667A\u591A\u3002\u6545\u4EE5\u667A\u6CBB\u56FD\uFF0C\u56FD\u4E4B\u8D3C\uFF1B\u4E0D\u4EE5' +
      '\u667A\u6CBB\u56FD\uFF0C\u56FD\u4E4B\u798F\u3002\u77E5\u6B64\u4E24\u8005\uFF0C\u4EA6\u7A3D\uFF08j\u012B\uFF09\u5F0F\u3002\u5E38\u77E5\u7A3D\u5F0F\uFF0C\u662F\u8C13\u7384\u5FB7\u3002\u7384\u5FB7\u6DF1\u77E3\uFF0C\u8FDC\u77E3\uFF0C\u4E0E\u7269\u53CD\u77E3\uFF0C\u7136\u540E\u4E43' +
      '\u81F3\u5927\u987A\u3002',
    icon: (
      <Icon size={20}>
        <Icons.CircleWarningFill />
      </Icon>
    ),
    time: '2023-01-02',
    type: 'warning',
    title: '\u7B2C\u516D\u5341\u4E94\u7AE0',
  },
  {
    content:
      '\u6C5F\u6D77\u6240\u4EE5\u80FD\u4E3A\u767E\u8C37\u738B\u8005\uFF0C\u4EE5\u5176\u5584\u4E0B\u4E4B\uFF0C\u6545\u80FD\u4E3A\u767E\u8C37\u738B\u3002\u662F\u4EE5\u6B32\u4E0A\u6C11\uFF0C\u5FC5\u4EE5\u8A00\u4E0B\u4E4B\uFF1B\u6B32\u5148\u6C11\uFF0C\u5FC5\u4EE5\u8EAB\u540E\u4E4B\u3002\u662F\u4EE5\u5723\u4EBA\u5904\u4E0A\u800C\u6C11\u4E0D\u91CD\uFF0C\u5904\u524D\u800C\u6C11\u4E0D\u5BB3\uFF0C\u662F\u4EE5\u5929\u4E0B\u4E50\u63A8\u800C\u4E0D\u538C\u3002\u4EE5\u5176\u4E0D\u4E89\uFF0C\u6545\u5929\u4E0B\u83AB\u80FD\u4E0E\u4E4B\u4E89\u3002',
    icon: (
      <Icon size={20}>
        <Icons.CircleCloseFill />
      </Icon>
    ),
    time: '2023-01-03',
    title: '\u7B2C\u516D\u5341\u516D\u7AE0',
    type: 'error',
  },
];
const App: React.FC = () => {
  return <Timeline items={items}></Timeline>;
};

export default App;
`},88239:function(e,n){n.Z=`import { TimelineItemProps, Timeline, Icons, Icon } from '@tool-pack/react-ui';
import React from 'react';

const items: TimelineItemProps[] = [
  {
    content:
      '\u5929\u4E0B\u7686\u8C13\u6211\u9053\u5927\uFF0C\u4F3C\u4E0D\u8096\uFF08xi\xE0o\uFF09\u3002\u592B\u552F\u5927\uFF0C\u6545\u4F3C\u4E0D\u8096\u3002\u82E5\u8096\uFF0C\u4E45\u77E3\u5176\u7EC6\u4E5F\u592B\u3002\u6211\u6709\u4E09\u5B9D' +
      '\uFF0C\u6301\u800C\u4FDD\u4E4B\u3002\u4E00\u66F0\u6148\uFF0C\u4E8C\u66F0\u4FED\uFF0C\u4E09\u66F0\u4E0D\u6562\u4E3A\u5929\u4E0B\u5148\u3002\u6148\uFF0C\u6545\u80FD\u52C7\uFF1B\u4FED\uFF0C\u6545\u80FD\u5E7F\uFF1B\u4E0D\u6562\u4E3A\u5929\u4E0B\u5148\uFF0C\u6545\u80FD\u6210\u5668' +
      '\u957F\uFF08zh\u01CEng\uFF09\u3002\u4ECA\u820D\u6148\u4E14\u52C7\uFF0C\u820D\u4FED\u4E14\u5E7F\uFF0C\u820D\u540E\u4E14\u5148\uFF0C\u6B7B\u77E3\uFF01\u592B\u6148\uFF0C\u4EE5\u6218\u5219\u80DC\uFF0C\u4EE5\u5B88\u5219\u56FA\uFF0C\u5929\u5C06\u6551\u4E4B\uFF0C\u4EE5\u6148\u536B\u4E4B\u3002',
    time: '2023-01-01',
    lineType: 'dotted',
    title: '\u7B2C\u516D\u5341\u4E03\u7AE0',
  },
  {
    icon: (
      <Icon>
        <Icons.Loading />
      </Icon>
    ),
    content: <div style={{ lineHeight: 1 }}>Loading...</div>,
  },
];
const App: React.FC = () => {
  return <Timeline items={items}></Timeline>;
};

export default App;
`},43090:function(e,n){n.Z=`import { TimelineItemProps, Timeline } from '@tool-pack/react-ui';
import React from 'react';

const items: TimelineItemProps[] = [
  {
    content:
      '\u5927\u56FD\u8005\u4E0B\u6D41\u3002\u5929\u4E0B\u4E4B\u4EA4\uFF0C\u5929\u4E0B\u4E4B\u725D\u3002\u725D\u5E38\u4EE5\u9759\u80DC\u7261\uFF0C\u4EE5\u9759\u4E3A\u4E0B\u3002\u6545\u5927\u56FD\u4EE5\u4E0B\u5C0F\u56FD\uFF0C\u5219\u53D6\u5C0F' +
      '\u56FD\uFF1B\u5C0F\u56FD\u4EE5\u4E0B\u5927\u56FD\uFF0C\u5219\u53D6\u5927\u56FD\u3002\u6545\u6216\u4E0B\u4EE5\u53D6\uFF0C\u6216\u4E0B\u800C\u53D6\u3002\u5927\u56FD\u4E0D\u8FC7\u6B32\u517C\u755C\uFF08x\xF9\uFF09\u4EBA\uFF0C\u5C0F\u56FD\u4E0D\u8FC7\u6B32\u5165\u4E8B\u4EBA\uFF0C' +
      '\u592B\u4E24\u8005\u5404\u5F97\u5176\u6240\u6B32\uFF0C\u5927\u8005\u5B9C\u4E3A\u4E0B\u3002',
    time: '2023-01-01',
    title: '\u7B2C\u516D\u5341\u4E00\u7AE0',
  },
  {
    content:
      '\u9053\u8005\u4E07\u7269\u4E4B\u5965\uFF0C\u5584\u4EBA\u4E4B\u5B9D\uFF0C\u4E0D\u5584\u4EBA\u4E4B\u6240\u4FDD\u3002\u7F8E\u8A00\u53EF\u4EE5\u5E02\uFF0C\u5C0A\u884C\u53EF\u4EE5\u52A0\u4EBA\u3002\u4EBA\u4E4B\u4E0D\u5584\uFF0C\u4F55\u5F03' +
      '\u4E4B\u6709\uFF01\u6545\u7ACB\u5929\u5B50\uFF0C\u7F6E\u4E09\u516C\uFF0C\u867D\u6709\u62F1\u74A7\u4EE5\u5148\u9A77\u9A6C\uFF0C\u4E0D\u5982\u5750\u8FDB\u6B64\u9053\u3002\u53E4\u4E4B\u6240\u4EE5\u8D35\u6B64\u9053\u8005\u4F55\uFF1F\u4E0D\u66F0\u4EE5\u6C42\u5F97\uFF0C\u6709\u7F6A' +
      '\u4EE5\u514D\u90AA\uFF08y\xE9\uFF09\uFF1F\u6545\u4E3A\u5929\u4E0B\u8D35\u3002',
    time: '2023-01-02',
    title: '\u7B2C\u516D\u5341\u4E8C\u7AE0',
  },
  {
    content:
      '\u4E3A\u65E0\u4E3A\uFF0C\u4E8B\u65E0\u4E8B\uFF0C\u5473\u65E0\u5473\u3002\u5927\u5C0F\u591A\u5C11\uFF0C\u62A5\u6028\u4EE5\u5FB7\u3002\u56FE\u96BE\u4E8E\u5176\u6613\uFF0C\u4E3A\u5927\u4E8E\u5176\u7EC6\u3002\u5929\u4E0B\u96BE\u4E8B\u5FC5' +
      '\u4F5C\u4E8E\u6613\uFF0C\u5929\u4E0B\u5927\u4E8B\u5FC5\u4F5C\u4E8E\u7EC6\uFF0C\u662F\u4EE5\u5723\u4EBA\u7EC8\u4E0D\u4E3A\u5927\uFF0C\u6545\u80FD\u6210\u5176\u5927\u3002\u592B\u8F7B\u8BFA\u5FC5\u5BE1\u4FE1\uFF0C\u591A\u6613\u5FC5\u591A\u96BE\uFF0C\u662F\u4EE5\u5723\u4EBA\u72B9' +
      '\u96BE\u4E4B\u3002\u6545\u7EC8\u65E0\u96BE\u77E3\u3002',
    time: '2023-01-03',
    title: '\u7B2C\u516D\u5341\u4E09\u7AE0',
  },
];
const App: React.FC = () => {
  return <Timeline placement="alternate" items={items} />;
};

export default App;
`},4909:function(e,n){n.Z=`import { TimelineItemProps, Timeline } from '@tool-pack/react-ui';
import React from 'react';

const items: TimelineItemProps[] = [
  {
    content:
      '\u6CBB\u4EBA\u4E8B\u5929\u83AB\u82E5\u556C\uFF08s\xE8\uFF09\u3002\u592B\u552F\u556C\uFF0C\u662F\u8C13\u65E9\u670D\u3002\u65E9\u670D\u8C13\u4E4B\u91CD(ch\xF3ng)\u79EF\u5FB7\uFF0C\u91CD(ch\xF3ng)\u79EF\u5FB7\u5219\u65E0\u4E0D\u514B\uFF0C\u65E0\u4E0D\u514B\u5219\u83AB\u77E5\u5176\u6781\uFF0C\u83AB\u77E5\u5176\u6781\uFF0C\u53EF\u4EE5\u6709\u56FD\u3002\u6709\u56FD\u4E4B\u6BCD\uFF0C\u53EF\u4EE5\u957F\u4E45\u3002\u662F\u8C13\u6DF1\u6839\u56FA\u67E2\uFF08d\u01D0\uFF09\uFF0C\u957F\u751F\u4E45\u89C6\u4E4B\u9053\u3002',
    time: '2023-01-01',
    title: '\u7B2C\u4E94\u5341\u4E5D\u7AE0',
  },
  {
    content:
      '\u6CBB\u5927\u56FD\u82E5\u70F9\u5C0F\u9C9C\u3002\u4EE5\u9053\u8385\uFF08l\xEC\uFF09\u5929\u4E0B\uFF0C\u5176\u9B3C\u4E0D\u795E\u3002\u975E\u5176\u9B3C\u4E0D\u795E\uFF0C\u5176\u795E\u4E0D\u4F24\u4EBA\uFF1B\u975E\u5176\u795E\u4E0D\u4F24\u4EBA\uFF0C\u5723\u4EBA\u4EA6\u4E0D\u4F24\u4EBA\u3002\u592B\u4E24\u4E0D\u76F8\u4F24\uFF0C\u6545\u5FB7\u4EA4\u5F52\u7109\u3002',
    time: '2023-01-02',
    title: '\u7B2C\u516D\u5341\u7AE0',
  },
];
const App: React.FC = () => {
  return <Timeline placement="right" items={items} />;
};

export default App;
`},88433:function(e,n){n.Z=`import { TimelineItemProps, Timeline, Switch } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const items: TimelineItemProps[] = [
  {
    content:
      '\u4EE5\u6B63\u6CBB\u56FD\uFF0C\u4EE5\u5947\u7528\u5175\uFF0C\u4EE5\u65E0\u4E8B\u53D6\u5929\u4E0B\u3002\u543E\u4F55\u4EE5\u77E5\u5176\u7136\u54C9\uFF1F\u4EE5\u6B64\u3002\u5929\u4E0B\u591A\u5FCC\u8BB3\uFF0C\u800C\u6C11\u5F25\u8D2B\uFF1B' +
      '\u6C11\u591A\u5229\u5668\uFF0C\u56FD\u5BB6\u6ECB\u660F\uFF1B\u4EBA\u591A\u4F0E\uFF08j\xEC\uFF09\u5DE7\uFF0C\u5947\u7269\u6ECB\u8D77\uFF1B\u6CD5\u4EE4\u6ECB\u5F70\uFF0C\u76D7\u8D3C\u591A\u6709\u3002\u6545\u5723\u4EBA\u4E91\uFF1A\u201C\u6211\u65E0\u4E3A\u800C\u6C11\u81EA\u5316' +
      '\uFF0C\u6211\u597D\u9759\u800C\u6C11\u81EA\u6B63\uFF0C\u6211\u65E0\u4E8B\u800C\u6C11\u81EA\u5BCC\uFF0C\u6211\u65E0\u6B32\u800C\u6C11\u81EA\u6734\u3002\u201D',
    time: '2023-01-01',
    title: '\u7B2C\u4E94\u5341\u4E03\u7AE0',
  },
  {
    content:
      '\u5176\u653F\u95F7\u95F7\uFF0C\u5176\u6C11\u6DF3\u6DF3\uFF1B\u5176\u653F\u5BDF\u5BDF\uFF0C\u5176\u6C11\u7F3A\u7F3A\u3002\u7978\u516E\u798F\u4E4B\u6240\u501A\uFF0C\u798F\u516E\u7978\u4E4B\u6240\u4F0F\u3002\u5B70\u77E5\u5176\u6781\uFF1F' +
      '\u5176\u65E0\u6B63\u3002\u6B63\u590D\u4E3A\u5947\uFF0C\u5584\u590D\u4E3A\u5996\uFF0C\u4EBA\u4E4B\u8FF7\uFF0C\u5176\u65E5\u56FA\u4E45\u3002\u662F\u4EE5\u5723\u4EBA\u65B9\u800C\u4E0D\u5272\uFF0C\u5EC9\u800C\u4E0D\u523F\uFF08gu\xEC\uFF09\uFF0C\u76F4\u800C\u4E0D\u8086\uFF0C\u5149' +
      '\u800C\u4E0D\u8000\u3002',
    time: '2023-01-02',
    title: '\u7B2C\u4E94\u5341\u516B\u7AE0',
  },
];
const App: React.FC = () => {
  const [reverse, setReverse] = useState(false);
  return (
    <>
      <Timeline reverse={reverse} items={items} />
      <br />
      <br />
      reverse: <Switch onChange={setReverse} checked={reverse} size="small" />
    </>
  );
};

export default App;
`},84920:function(e,n){n.Z=`import { TimelineItemProps, Timeline } from '@tool-pack/react-ui';
import React from 'react';

const items: TimelineItemProps[] = [
  {
    content:
      '\u5929\u4E0B\u6709\u59CB\uFF0C\u4EE5\u4E3A\u5929\u4E0B\u6BCD\u3002\u65E2\u5F97\u5176\u6BCD\uFF0C\u4EE5\u77E5\u5176\u5B50\uFF1B\u65E2\u77E5\u5176\u5B50\uFF0C\u590D\u5B88\u5176\u6BCD\uFF0C\u6CA1\uFF08m\xF2\uFF09\u8EAB\u4E0D\u6B86\u3002\u585E\uFF08s\xE8\uFF09\u5176\u5151\uFF0C\u95ED\u5176\u95E8\uFF0C\u7EC8\u8EAB\u4E0D\u52E4\u3002\u5F00\u5176\u5151\uFF0C\u6D4E\u5176\u4E8B\uFF0C\u7EC8\u8EAB\u4E0D\u6551\u3002\u89C1\uFF08ji\xE0n\uFF09\u5C0F\u66F0\u660E\uFF0C\u5B88\u67D4\u66F0\u5F3A\u3002\u7528\u5176\u5149\uFF0C\u590D\u5F52\u5176\u660E\uFF0C\u65E0\u9057\u8EAB\u6B83\uFF0C\u662F\u4E3A\u4E60\u5E38\u3002',
    time: '2023-01-01',
    type: 'default',
    title: '\u7B2C\u4E94\u5341\u4E8C\u7AE0',
  },
  {
    content:
      '\u4F7F\u6211\u4ECB\u7136\u6709\u77E5\uFF0C\u884C\u4E8E\u5927\u9053\uFF0C\u552F\u65BD\uFF08\u8FE4y\xED\uFF09\u662F\u754F\u3002\u5927\u9053\u751A\u5937\uFF0C\u800C\u6C11\u597D\u5F84\u3002\u671D\uFF08ch\xE1o\uFF09\u751A\u9664\uFF0C\u7530\u751A\u829C\uFF0C\u4ED3\u751A\u865A\u3002\u670D\u6587\u5F69\uFF0C\u5E26\u5229\u5251\uFF0C\u538C\u996E\u98DF\uFF0C\u8D22\u8D27\u6709\u4F59\uFF0C\u662F\u4E3A\u76D7\u5938\u3002\u975E\u9053\u4E5F\u54C9\uFF01',
    time: '2023-01-02',
    title: '\u7B2C\u4E94\u5341\u4E09\u7AE0',
    type: 'info',
  },
  {
    content:
      '\u5584\u5EFA\u8005\u4E0D\u62D4\uFF0C\u5584\u62B1\u8005\u4E0D\u8131\uFF0C\u5B50\u5B59\u4EE5\u796D\u7940\u4E0D\u8F8D\u3002\u4FEE\u4E4B\u4E8E\u8EAB\uFF0C\u5176\u5FB7\u4E43\u771F\uFF1B\u4FEE\u4E4B\u4E8E\u5BB6\uFF0C\u5176\u5FB7\u4E43\u4F59\uFF1B\u4FEE\u4E4B\u4E8E\u4E61\uFF0C\u5176\u5FB7\u4E43\u957F\uFF08zh\u01CEng\uFF09\uFF1B\u4FEE\u4E4B\u4E8E\u56FD\uFF0C\u5176\u5FB7\u4E43\u4E30\uFF1B\u4FEE\u4E4B\u4E8E\u5929\u4E0B\uFF0C\u5176\u5FB7\u4E43\u666E\u3002\u6545\u4EE5\u8EAB\u89C2\u8EAB\uFF0C\u4EE5\u5BB6\u89C2\u5BB6\uFF0C\u4EE5\u4E61\u89C2\u4E61\uFF0C\u4EE5\u56FD\u89C2\u56FD\uFF0C\u4EE5\u5929\u4E0B\u89C2\u5929\u4E0B\u3002\u543E\u4F55\u4EE5\u77E5\u5929\u4E0B\u7136\u54C9\uFF1F\u4EE5\u6B64\u3002',
    time: '2023-01-03',
    type: 'success',
    title: '\u7B2C\u4E94\u5341\u56DB\u7AE0',
  },
  {
    content:
      '\u542B\u5FB7\u4E4B\u539A\uFF0C\u6BD4\u4E8E\u8D64\u5B50\u3002\u8702\u867F\uFF08ch\xE0i\uFF09\u867A\uFF08hu\u01D0\uFF09\u86C7\u4E0D\u87AB(sh\xEC)\uFF0C\u731B\u517D\u4E0D\u636E\uFF0C\u652B(ju\xE9)\u9E1F\u4E0D\u640F\u3002\u9AA8\u5F31\u7B4B\u67D4\u800C\u63E1\u56FA\u3002\u672A\u77E5\u725D\u7261\u4E4B\u5408\u800C\u5168\u4F5C\uFF0C\u7CBE\u4E4B\u81F3\u4E5F\u3002\u7EC8\u65E5\u53F7\u800C\u4E0D\u55C4\uFF08sh\xE0\uFF09\uFF0C\u548C\u4E4B\u81F3\u4E5F\u3002\u77E5\u548C\u66F0\u5E38\uFF0C\u77E5\u5E38\u66F0\u660E\uFF0C\u76CA\u751F\u66F0\u7965\uFF0C\u5FC3\u4F7F\u6C14\u66F0\u5F3A\u3002\u7269\u58EE\u5219\u8001\uFF0C\u8C13\u4E4B\u4E0D\u9053\uFF0C\u4E0D\u9053\u65E9\u5DF2\u3002',
    time: '2023-01-04',
    type: 'warning',
    title: '\u7B2C\u4E94\u5341\u4E94\u7AE0',
  },
  {
    content:
      '\u77E5\uFF08zh\xEC\uFF09\u8005\u4E0D\u8A00\uFF0C\u8A00\u8005\u4E0D\u77E5\uFF08zh\xEC\uFF09\u3002\u585E\uFF08s\xE8\uFF09\u5176\u5151\uFF0C\u95ED\u5176\u95E8\uFF0C\u632B\u5176\u9510\uFF1B\u89E3\u5176\u7EB7\uFF0C\u548C\u5176\u5149\uFF0C\u540C\u5176\u5C18\uFF0C\u662F\u8C13\u7384\u540C\u3002\u6545\u4E0D\u53EF\u5F97\u800C\u4EB2\uFF0C\u4E0D\u53EF\u5F97\u800C\u758F\uFF1B\u4E0D\u53EF\u5F97\u800C\u5229\uFF0C\u4E0D\u53EF\u5F97\u800C\u5BB3\uFF1B\u4E0D\u53EF\u5F97\u800C\u8D35\uFF0C\u4E0D\u53EF\u5F97\u800C\u8D31\uFF0C\u6545\u4E3A\u5929\u4E0B\u8D35\u3002',
    time: '2023-01-05',
    title: '\u7B2C\u4E94\u5341\u516D\u7AE0',
    type: 'error',
  },
];
const App: React.FC = () => {
  return <Timeline items={items}></Timeline>;
};

export default App;
`},91484:function(e,n){n.Z=`import { Tooltip, Divider } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Tooltip title="\u4E0D\u5982\u987B\u81FE\u4E4B\u6240\u5B66\u4E5F">
        <span>\u543E\u5C1D\u7EC8\u65E5\u800C\u601D\u77E3</span>
      </Tooltip>
      \uFF1B
      <Tooltip title={<span>\u4E0D\u5982\u767B\u9AD8\u4E4B\u535A\u89C1\u4E5F</span>}>
        <span>\u543E\u5C1D\u8DC2\u800C\u671B\u77E3</span>
      </Tooltip>
      <Divider />
      <Tooltip title="\u5F97\u77E5\u6B64\u4E8B\u8981\u8EAC\u884C">
        <span>\u7EB8\u4E0A\u5F97\u6765\u7EC8\u89C9\u6D45</span>
      </Tooltip>
    </>
  );
};

export default App;
`},59491:function(e,n){n.Z=`$name: 'group';
.root {
  :global {
    .#{$name} {
      &-enter-active,
      &-leave-active,
      &-move-active {
        transition: all 1s ease;
      }
      &-enter-from {
        transform: scaleY(0.01) translate(0, -100%);
        opacity: 0;
      }
      &-leave-to {
        transform: scaleY(0.01) translate(0, 100%);
        opacity: 0;
      }
    }
    .group-container {
      margin: auto;
      width: 300px;
      font-size: 0;
      text-align: left;
      button {
        display: inline-block;
        width: 60px;
        height: 40px;
        font-size: 16px;
      }
    }
    button {
      user-select: none;
    }
  }
}
`},21486:function(e,n){n.Z=`import { TransitionGroup, Button, Space } from '@tool-pack/react-ui';
import React, { useCallback, useState, useRef } from 'react';
import styles from './all.module.scss';

const App: React.FC = () => {
  const [, update] = useState({});
  const forceUpdate = useCallback(() => update({}), []);

  const children = useRef<number[]>([...Array.from({ length: 30 }).keys()]);

  const index = useRef(children.current.length);
  function addChild() {
    children.current.push(index.current);
    forceUpdate();
    index.current++;
  }
  function removeChild(item: number) {
    const index = children.current.indexOf(item);
    if (index === -1) return;
    children.current.splice(index, 1);
    forceUpdate();
  }
  function removeRandomChild() {
    removeChild(children.current[~~(Math.random() * children.current.length)]!);
  }
  function shuffle() {
    const list = children.current;
    const len = list.length;
    for (let i = 0; i < len; i++) {
      const j = ~~(Math.random() * len);
      [list[i] as unknown, list[j] as unknown] = [list[j], list[i]];
    }
    forceUpdate();
  }

  return (
    <div className={styles['root']}>
      <Space style={{ justifyContent: 'center' }}>
        <Button onClick={addChild} type="primary">
          \u6DFB\u52A0
        </Button>
        <Button onClick={shuffle} type="primary" plain>
          \u6D17\u724C
        </Button>
        <Button onClick={removeRandomChild} type="warning" plain>
          \u79FB\u9664
        </Button>
      </Space>
      <br />
      <TransitionGroup className="group-container" tag="section" name="group">
        {children.current.map((item) => {
          return (
            <button onClick={() => removeChild(item)} key={item}>
              {item}
            </button>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default App;
`},43362:function(e,n){n.Z=`$name: 'group';
.root {
  :global {
    .#{$name} {
      &-move-active {
        transition: all 1s ease;
      }
    }
    .group-container {
      margin: auto;
      width: 250px;
      font-size: 0;
      text-align: left;
      button {
        display: inline-block;
        width: 50px;
        height: 50px;
        font-size: 16px;
        border: 1px solid gray;
        border-radius: 0;
        background: none;
      }
    }
    button {
      user-select: none;
    }
  }
}
`},66454:function(e,n){n.Z=`import { TransitionGroup, Button, Space } from '@tool-pack/react-ui';
import React, { useCallback, useState, useRef } from 'react';
import styles from './flip.module.scss';

const App: React.FC = () => {
  const [, update] = useState({});
  const forceUpdate = useCallback(() => update({}), []);

  const children = useRef<number[]>([...Array.from({ length: 25 }).keys()]);

  function shuffle() {
    const list = children.current;
    const len = list.length;
    for (let i = 0; i < len; i++) {
      const j = ~~(Math.random() * len);
      [list[i] as unknown, list[j] as unknown] = [list[j], list[i]];
    }
    forceUpdate();
  }

  return (
    <div className={styles['root']}>
      <Space style={{ justifyContent: 'center' }}>
        <Button onClick={shuffle} type="primary" plain>
          \u6D17\u724C
        </Button>
      </Space>
      <br />
      <TransitionGroup className="group-container" tag="section" name="group">
        {children.current.map((item) => {
          return <button key={item}>{item}</button>;
        })}
      </TransitionGroup>
    </div>
  );
};

export default App;
`},96043:function(e,n){n.Z=`$name: 'group';
.root {
  :global {
    .#{$name} {
      &-enter-active,
      &-leave-active,
      &-move-active {
        transition: all 0.8s ease;
      }
      &-enter-from {
        transform: scaleY(0.01) translateY(-100%);
        opacity: 0;
      }
      &-leave-to {
        // tips: scaleY \u5982\u679C\u4E3A 0 \u4F1A\u9000\u51FA\u4E0D\u5F7B\u5E95
        transform: scaleY(0.01) translateY(100%);
        opacity: 0;
      }
    }
    .group-container {
      white-space: nowrap;
      div {
        display: inline-block;
        padding: 6px;
      }
    }
  }
}
`},52450:function(e,n){n.Z=`import { TransitionGroup, Button, Space } from '@tool-pack/react-ui';
import React, { useCallback, useState, useRef } from 'react';
import styles from './list.module.scss';

const App: React.FC = () => {
  const [, update] = useState({});
  const forceUpdate = useCallback(() => update({}), []);

  const children = useRef<number[]>([...Array.from({ length: 10 }).keys()]);

  const index = useRef(children.current.length);
  function addChild() {
    const list = children.current;
    const splice = list.splice(~~(Math.random() * list.length), list.length);
    list.push(index.current);
    list.push(...splice);
    forceUpdate();
    index.current++;
  }
  function removeChild(item: number) {
    const index = children.current.indexOf(item);
    if (index === -1) return;
    children.current.splice(index, 1);
    forceUpdate();
  }
  function removeRandomChild() {
    removeChild(children.current[~~(Math.random() * children.current.length)]!);
  }

  return (
    <div className={styles['root']}>
      <Space style={{ justifyContent: 'center' }}>
        <Button onClick={addChild} type="primary">
          \u6DFB\u52A0
        </Button>
        <Button onClick={removeRandomChild} type="warning" plain>
          \u79FB\u9664
        </Button>
      </Space>
      <br />
      <TransitionGroup className="group-container" tag="section" name="group">
        {children.current.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </TransitionGroup>
    </div>
  );
};

export default App;
`},42693:function(e,n){n.Z=`$name: 'group';
.root {
  :global {
    .#{$name} {
      &-enter-active,
      &-leave-active,
      &-move-active {
        transition: all 1s ease;
      }
      &-enter-from {
        transform: scaleY(0.1) translateX(-100%);
        opacity: 0;
      }
      &-leave-to {
        transform: scaleY(0.1) translateX(100%);
        opacity: 0;
      }
    }
    .group-container {
      div {
        padding: 6px;
        border: 1px solid white;
        color: whitesmoke;
        background-color: #f56c6c;
      }
    }
  }
}
`},95678:function(e,n){n.Z=`import { TransitionGroup, Button, Space } from '@tool-pack/react-ui';
import React, { useCallback, useState, useRef } from 'react';
import styles from './mixed.module.scss';

const initLen = 5;
const initArr = () => [...Array.from({ length: initLen }).keys()];
const App: React.FC = () => {
  const [, update] = useState({});
  const forceUpdate = useCallback(() => update({}), []);

  const children = useRef<number[]>(initArr());

  const index = useRef(initLen);
  function addChild() {
    const list = children.current;
    const splice = list.splice(~~(Math.random() * list.length), list.length);
    list.push(index.current);
    list.push(...splice);
    forceUpdate();
    index.current++;
  }
  function removeChild(item: number) {
    const index = children.current.indexOf(item);
    if (index === -1) return;
    children.current.splice(index, 1);
    forceUpdate();
  }
  function removeRandomChild() {
    removeChild(children.current[~~(Math.random() * children.current.length)]!);
  }
  function shuffle() {
    const list = children.current;
    const len = list.length;
    for (let i = 0; i < len; i++) {
      const j = ~~(Math.random() * len);
      [list[i] as unknown, list[j] as unknown] = [list[j], list[i]];
    }
    forceUpdate();
  }

  function reset() {
    children.current = initArr();
    index.current = initLen;
    forceUpdate();
  }

  return (
    <div className={styles['root']}>
      <Space style={{ justifyContent: 'center' }}>
        <Button onClick={addChild} type="primary">
          \u6DFB\u52A0
        </Button>
        <Button onClick={shuffle} type="primary" plain>
          \u6D17\u724C
        </Button>
        <Button onClick={removeRandomChild} type="warning" plain>
          \u79FB\u9664
        </Button>
        <Button onClick={reset} type="danger" plain>
          \u91CD\u7F6E
        </Button>
      </Space>
      <br />
      <TransitionGroup className="group-container" tag="section" name="group">
        {children.current.map((item) => {
          return (
            /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
            <div onClick={() => removeChild(item)} key={item}>
              {item}
            </div>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default App;
`},72988:function(e,n){n.Z=`$name: 'group';
.root {
  :global {
    .#{$name} {
      &-move-active {
        transition: all 1s ease;
      }
    }
    .group-container {
      white-space: nowrap;
      div {
        display: inline-block;
        padding: 6px;
      }
    }
  }
}
`},38163:function(e,n){n.Z=`import { TransitionGroup, Button } from '@tool-pack/react-ui';
import React, { useCallback, useState, useRef } from 'react';
import styles from './shuffle.module.scss';

const App: React.FC = () => {
  const [, update] = useState({});
  const forceUpdate = useCallback(() => update({}), []);

  const children = useRef<number[]>([...Array.from({ length: 20 }).keys()]);
  function shuffle() {
    const list = children.current;
    const len = list.length;
    for (let i = 0; i < len; i++) {
      const j = ~~(Math.random() * len);
      [list[i] as unknown, list[j] as unknown] = [list[j], list[i]];
    }
    forceUpdate();
  }

  return (
    <div className={styles['root']}>
      <Button onClick={shuffle} type="primary" plain>
        \u6D17\u724C
      </Button>
      <br />
      <TransitionGroup className="group-container" tag="section" name="group">
        {children.current.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </TransitionGroup>
    </div>
  );
};

export default App;
`},16212:function(e,n){n.Z=`import { TransitionGroup, Button, Space } from '@tool-pack/react-ui';
import React, { useCallback, useState, useRef } from 'react';
import styles from './list.module.scss';

const App: React.FC = () => {
  const [, update] = useState({});
  const forceUpdate = useCallback(() => update({}), []);

  const children = useRef<number[]>([...Array.from({ length: 10 }).keys()]);

  const index = useRef(children.current.length);
  function addChild() {
    const list = children.current;
    const splice = list.splice(~~(Math.random() * list.length), list.length);
    list.push(index.current);
    list.push(...splice);
    forceUpdate();
    index.current++;
  }
  function removeChild(item: number) {
    const index = children.current.indexOf(item);
    if (index === -1) return;
    children.current.splice(index, 1);
    forceUpdate();
  }
  function removeRandomChild() {
    removeChild(children.current[~~(Math.random() * children.current.length)]!);
  }

  return (
    <div className={styles['root']}>
      <Space style={{ justifyContent: 'center' }}>
        <Button onClick={addChild} type="primary">
          \u6DFB\u52A0
        </Button>
        <Button onClick={removeRandomChild} type="warning" plain>
          \u79FB\u9664
        </Button>
      </Space>
      <br />
      <div className="group-container">
        <TransitionGroup name="group" tag={null}>
          {children.current.map((item) => {
            return <div key={item}>{item}</div>;
          })}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default App;
`},70027:function(e,n){n.Z=`import {
  transitionCBAdapter,
  TransitionGroup,
  Transition,
  Button,
  Space,
} from '@tool-pack/react-ui';
import React, { useState, useRef } from 'react';
import styles from './list.module.scss';

const App: React.FC = () => {
  const [list, setList] = useState<number[]>([
    ...Array.from({ length: 10 }).keys(),
  ]);

  const index = useRef(list.length);
  function addChild() {
    const splice = list.splice(~~(Math.random() * list.length), list.length);
    list.push(index.current);
    list.push(...splice);
    index.current++;
    setList(list.slice());
  }
  function removeChild(item: number) {
    const index = list.indexOf(item);
    if (index === -1) return;
    list.splice(index, 1);
    setList(list.slice());
  }
  function removeRandomChild() {
    removeChild(list[~~(Math.random() * list.length)]!);
  }

  return (
    <div className={styles['root']}>
      <Space style={{ justifyContent: 'center' }}>
        <Button onClick={addChild} type="primary">
          \u6DFB\u52A0
        </Button>
        <Button onClick={removeRandomChild} type="warning" plain>
          \u79FB\u9664
        </Button>
      </Space>
      <br />
      <TransitionGroup className="group-container" tag="section" name="group">
        {list.map((item) => {
          return (
            <Transition
              on={transitionCBAdapter({
                onBeforeEnter() {
                  console.log(item + '\u6B63\u5728\u8FDB\u6765');
                },
                onBeforeLeave() {
                  console.log(item + '\u6B63\u5728\u79BB\u53BB');
                },
                onAfterEnter() {
                  console.log(item + '\u5DF2\u8FDB\u6765');
                },
                onAfterLeave() {
                  console.log(item + '\u5DF2\u79BB\u53BB');
                },
              })}
              key={item}
            >
              <div>{item}</div>
            </Transition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default App;
`},24569:function(e,n){n.Z=`import { transitionCBAdapter, Transition, Button } from '@tool-pack/react-ui';
import React, { useReducer } from 'react';
import './base.scss';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={setVisible} type="primary" shape="round">
        \u5207 \u6362
      </Button>
      <br />
      <br />
      <div className="transition-box">
        <Transition
          on={transitionCBAdapter(
            {
              onAfterEnter: (el) => console.log('onAfterEnter', el),
              onAfterLeave: (el) => console.log('onAfterLeave', el),
            },
            true,
          )}
          name="fade"
        >
          {visible && <button disabled>name: fade</button>}
        </Transition>
      </div>
    </div>
  );
};

export default App;
`},49742:function(e,n){n.Z=`import { Transition, Button } from '@tool-pack/react-ui';
import React, { useReducer } from 'react';
import './base.scss';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={setVisible} type="primary" shape="round">
        \u5207 \u6362
      </Button>
      <br />
      <br />
      <div className="transition-box">
        <Transition name="fade">
          {visible && (
            <button className="fade" disabled key={1}>
              single
            </button>
          )}
        </Transition>
      </div>
      <div className="transition-box">
        <Transition mode="out-in" name="fade">
          {visible ? (
            <div className="fade" key={1}>
              out-in(out)
            </div>
          ) : (
            <div key={2}>out-in(in)</div>
          )}
        </Transition>
      </div>
      <div className="transition-box">
        <Transition mode="in-out" name="fade">
          {visible ? (
            <div className="fade" key={1}>
              in-out(in)
            </div>
          ) : (
            <div key={2}>in-out(out)</div>
          )}
        </Transition>
      </div>
      <div className="transition-box">
        <Transition mode="default" name="fade">
          {visible ? (
            <div className="fade" key={1}>
              default(out)
            </div>
          ) : (
            <div key={2}>default(in)</div>
          )}
        </Transition>
      </div>
    </div>
  );
};

export default App;
`},95661:function(e,n){n.Z=`$r: 'ani';
.root {
  :global {
    // \u56E0\u4E3A css module \u7F16\u8BD1\u6210 css \u540E @keyframes \u540D\u5B57\u4F1A\u6539\u6210\u54C8\u5E0C\u503C\uFF0C
    // \u52A0\u4E0A :local \u53EF\u4EE5\u4FDD\u6301\u540C\u6B65
    .#{$r}-enter-active:local {
      animation: ani-scale 2s both;
    }
    .#{$r}-leave-active:local {
      animation: ani-scale 2s both reverse;
    }
    button:not(.t-button) {
      width: 100%;
      height: 100%;
    }
  }
}
@keyframes ani-scale {
  0% {
    width: 30%;
    height: 10%;
  }
  50% {
    width: 50%;
    height: 75%;
  }
  100% {
    width: 100%;
    height: 100%;
  }
}
`},12289:function(e,n){n.Z=`import {
  TRANSITION_LIFE_CIRCLE,
  TRANSITION_STATUS,
  TransitionCB,
  Transition,
  Button,
} from '@tool-pack/react-ui';
import style from './animation.module.scss';
import React, { useReducer } from 'react';
import './base.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);

  const on: TransitionCB = (el, status, lifeCircle) => {
    console.log(
      el,
      TRANSITION_STATUS[status],
      TRANSITION_LIFE_CIRCLE[lifeCircle],
    );
  };
  return (
    <div style={{ textAlign: 'center' }} className={style['root']}>
      <Button onClick={setVisible} type="primary" shape="round">
        \u5207 \u6362
      </Button>
      <br />
      <br />
      <div className="transition-box">
        <Transition name="ani" on={on}>
          {visible && <button disabled>name: ani</button>}
        </Transition>
      </div>
    </div>
  );
};

export default App;
`},20697:function(e,n){n.Z=`import { Transition, Button, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';
import './base.scss';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState(true);

  const toggle = () => setVisible((v) => !v);

  const restore = () => {
    setActive(false);
    setVisible(true);
    setTimeout(() => setActive(true), 50);
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <Space inline>
        <Button onClick={toggle} type="primary" shape="round">
          \u5207 \u6362
        </Button>
        <Button onClick={restore} type="primary" shape="round" plain>
          \u91CD\u65B0\u52A0\u8F7D\u7EC4\u4EF6
        </Button>
      </Space>
      <br />
      <br />
      {active && (
        <>
          <div className="transition-box">
            <Transition name="fade" appear>
              {visible && (
                <button className="fade" disabled key={1}>
                  appear\uFF1Atrue
                </button>
              )}
            </Transition>
          </div>
          <div className="transition-box">
            <Transition name="fade">
              {visible && (
                <button className="fade" disabled key={2}>
                  appear\uFF1Afalse
                </button>
              )}
            </Transition>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
`},63679:function(e,n){n.Z=`.transition-box {
  position: relative;
  margin: auto;
  width: 200px;
  height: 60px;
  > div {
    position: absolute;
    width: 200px;
  }
}
`},89933:function(e,n){n.Z=`import { Transition, Button } from '@tool-pack/react-ui';
import React, { useReducer } from 'react';
import './base.scss';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={setVisible} type="primary" shape="round">
        \u5207 \u6362
      </Button>
      <br />
      <br />
      <div className="transition-box">
        <Transition name="fade">
          {/* \u4E0D\u8981\u7528\u7EC4\u4EF6\u5E93\u5185\u7684Button\u505Atransition\uFF0C\u56E0\u4E3AButton\u5185\u7F6E\u7684transition\u4F1A\u6DF7\u6DC6 */}
          {visible && <button disabled>name: fade</button>}
        </Transition>
      </div>
    </div>
  );
};

export default App;
`},72779:function(e,n){n.Z=`import { transitionCBAdapter, Transition, Button } from '@tool-pack/react-ui';
import React, { useReducer } from 'react';
import './base.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={setVisible} type="primary" shape="round">
        \u5207 \u6362
      </Button>
      <br />
      <br />
      <div className="transition-box">
        <div></div>
        <Transition
          on={transitionCBAdapter({}, false)}
          name="fade123"
          show={visible}
        >
          <button disabled>name: fade</button>
        </Transition>
      </div>
      <div className="transition-box">
        <div></div>
        <Transition on={transitionCBAdapter({}, true)} name="fade123">
          {visible && <button disabled>name: fade</button>}
        </Transition>
      </div>
    </div>
  );
};

export default App;
`},55253:function(e,n){n.Z=`$r: 'fade';

.#{$r} {
  &-enter-active,
  &-leave-active {
    transition: all 1.5s ease-in-out;
  }
  &-enter-from {
    transform: translateX(-100%);
    opacity: 0;
  }
  &-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }
}
`},23357:function(e,n){n.Z=`import { Transition, Button, Space } from '@tool-pack/react-ui';
import React, { useReducer, useState } from 'react';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');

  return (
    <Space style={{ flexWrap: 'nowrap' }} vertical>
      <Button onClick={setVisible} type="primary" shape="round">
        \u5207 \u6362
      </Button>
      <Transition name="fade">
        {visible && (
          <input
            onChange={(e) => setValue(e.target.value)}
            placeholder="\u8F93\u5165\u6587\u5B57\u65F6\u4E0D\u4F1A\u89E6\u53D1\u52A8\u753B"
            value={value}
            type="text"
            key={0}
          />
        )}
      </Transition>
      <Transition name="fade">
        {visible && (
          <input
            onChange={(e) => setValue2(e.target.value)}
            placeholder="\u8F93\u5165\u6587\u5B57\u65F6\u4F1A\u89E6\u53D1\u52A8\u753B"
            value={value2}
            type="text"
          />
        )}
      </Transition>
    </Space>
  );
};

export default App;
`},97738:function(e,n){n.Z=`import { Transition, Button } from '@tool-pack/react-ui';
import React, { useReducer } from 'react';
import './base.scss';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={setVisible} type="primary" shape="round">
        \u5207 \u6362
      </Button>
      <br />
      <br />
      <div className="transition-box">
        <Transition mode="out-in" name="fade">
          {visible ? (
            <div className="mode" key={1}>
              out-in(out)
            </div>
          ) : (
            <div key={2}>out-in(in)</div>
          )}
        </Transition>
      </div>
      <div className="transition-box">
        <Transition mode="in-out" name="fade">
          {visible ? (
            <div className="mode" key={1}>
              in-out(in)
            </div>
          ) : (
            <div key={2}>in-out(out)</div>
          )}
        </Transition>
      </div>
      <div className="transition-box">
        <Transition mode="default" name="fade">
          {visible ? (
            <div className="mode" key={1}>
              default(out)
            </div>
          ) : (
            <div key={2}>default(in)</div>
          )}
        </Transition>
      </div>
    </div>
  );
};

export default App;
`},54009:function(e,n){n.Z=`import {
  TRANSITION_LIFE_CIRCLE,
  TRANSITION_STATUS,
  TransitionCB,
  Transition,
  Button,
} from '@tool-pack/react-ui';
import React, { useReducer } from 'react';
import './base.scss';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);

  const on: TransitionCB = (el, status, lifeCircle) => {
    console.log(
      el,
      TRANSITION_STATUS[status],
      TRANSITION_LIFE_CIRCLE[lifeCircle],
    );
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={setVisible} type="primary" shape="round">
        \u5207 \u6362
      </Button>
      <br />
      <br />
      <div className="transition-box">
        <Transition name="fade" on={on}>
          {visible && <button disabled>name: fade</button>}
        </Transition>
      </div>
    </div>
  );
};

export default App;
`},29645:function(e,n){n.Z=`import { Transition, Button, Space } from '@tool-pack/react-ui';
import React, { useReducer, useState } from 'react';
import './base.scss';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, false);
  const [value, setValue] = useState('');

  return (
    <Space vertical>
      <Button onClick={setVisible} type="primary" shape="round">
        \u5207 \u6362
      </Button>
      <Transition show={visible} appear={null} name="fade">
        <textarea
          placeholder="show\u4E0Eappear\u642D\u914D. \u5F53\u521D\u59CB\u672A\u663E\u793A\u65F6\u4E0D\u4F1A\u6E32\u67D3 dom\uFF0C\u4E4B\u540E\u9690\u85CF\u4E0D\u4F1A\u9500\u6BC1 dom"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          rows={5}
          key={1}
        />
      </Transition>
    </Space>
  );
};

export default App;
`},93250:function(e,n){n.Z=`import { Transition, Button, Space } from '@tool-pack/react-ui';
import React, { useReducer, useState } from 'react';
import './base.scss';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);
  const [value, setValue] = useState('');

  return (
    <Space vertical>
      <Button onClick={setVisible} type="primary" shape="round">
        \u5207 \u6362
      </Button>
      <Transition show={visible} name="fade">
        <textarea
          placeholder="\u901A\u8FC7show\u63A7\u5236\u52A8\u753B\u3002\u8C03\u6574\u4E24\u4E2A\u8F93\u5165\u6846\u7684\u5BBD\u9AD8\u5E76\u5207\u6362\u52A8\u753B\u770B\u770B\u5B83\u4EEC\u7684\u533A\u522B"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          rows={5}
          key={1}
        />
      </Transition>
      <Transition name="fade">
        {visible && (
          <textarea
            onChange={(e) => setValue(e.target.value)}
            placeholder="\u901A\u8FC7children\u63A7\u5236\u52A8\u753B"
            value={value}
            rows={5}
            key={1}
          />
        )}
      </Transition>
    </Space>
  );
};

export default App;
`},2601:function(e,n){n.Z=`import { VirtualList, Alert } from '@tool-pack/react-ui';
import React from 'react';

const length = 50;

const App: React.FC = () => {
  return (
    <>
      <h3>\u5185\u542B {length} \u4E2A\u56FA\u5B9A\u5BBD\u5EA6 Alert \u7EC4\u4EF6</h3>
      <VirtualList
        attrs={{
          style: {
            backgroundColor: '#fdf3f8',
            height: '300px',
          },
        }}
      >
        {Array.from({ length }).map((_, i) => (
          <Alert key={i}>{i}</Alert>
        ))}
      </VirtualList>
    </>
  );
};

export default App;
`},75754:function(e,n){n.Z=`import { VirtualList, Select, Alert } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const options = [
  { label: 100, value: 100 },
  { label: 500, value: 500 },
  { label: 1000, value: 1000 },
  { label: 5000, value: 5000 },
  { label: 10000, value: 10000 },
];
const App: React.FC = () => {
  const [num, setNum] = useState(100);
  return (
    <>
      item \u6570\u91CF\uFF1A
      <Select
        attrs={{
          style: { display: 'inline-flex', minWidth: '100px' },
        }}
        onChange={setNum}
        options={options}
        size="small"
        value={num}
      />
      <br />
      <br />
      <VirtualList
        attrs={{
          style: {
            backgroundColor: '#fdf3f8',
            height: '300px',
          },
        }}
      >
        {Array.from({ length: num }).map((_, i) => (
          <Alert title={i} key={i}>
            {(i + ' ').repeat(~~(Math.random() * 500))}
          </Alert>
        ))}
      </VirtualList>
    </>
  );
};

export default App;
`},15736:function(e,n){n.Z=`import { PLACEMENTS_12, WordBalloon, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space gap={30} vertical>
      <WordBalloon
        attrs={{ style: { alignSelf: 'flex-end', maxWidth: '50%' } }}
        placement="left-start"
        background={'#b8cfef'}
      >
        {'\u4F60\u662F\u8C01? \u4F60\u662F\u8C01? \u4F60\u662F\u8C01?\\n'.repeat(5)}
      </WordBalloon>
      <WordBalloon
        attrs={{ style: { alignSelf: 'flex-start', maxWidth: '50%' } }}
        placement="right-start"
        background={'#9eec9e'}
      >
        {'\u4F60\u597D\uFF0C\u6211\u662FChatGPT\uFF0C\u6211\u662FChatGPT\uFF0C\u6211\u771F\u7684\u662FChatGPT\u3002\\n'.repeat(5)}
      </WordBalloon>

      <WordBalloon>
        <p>
          \u9053\u53EF\u9053\uFF0C\u975E\u5E38\u9053\uFF1B\u540D\u53EF\u540D\uFF0C\u975E\u5E38\u540D\u3002\u65E0\u540D\u5929\u5730\u4E4B\u59CB\uFF0C\u6709\u540D\u4E07\u7269\u4E4B\u6BCD\u3002\u6545\u5E38\u65E0\u6B32\uFF0C\u4EE5\u89C2\u5176\u5999\uFF1B\u5E38\u6709\u6B32\uFF0C\u4EE5\u89C2\u5176\u5FBC\uFF08ji\xE0o\uFF09\u3002\u6B64\u4E24\u8005\u540C\u51FA\u800C\u5F02\u540D\uFF0C\u540C\u8C13\u4E4B\u7384\uFF0C\u7384\u4E4B\u53C8\u7384\uFF0C\u4F17\u5999\u4E4B\u95E8\u3002
        </p>
        <p>
          \u5929\u4E0B\u7686\u77E5\u7F8E\u4E4B\u4E3A\u7F8E\uFF0C\u65AF\u6076\uFF08\xE8\uFF09\u5DF2\uFF1B\u7686\u77E5\u5584\u4E4B\u4E3A\u5584\uFF0C\u65AF\u4E0D\u5584\u5DF2\u3002\u6545\u6709\u65E0\u76F8\u751F\uFF0C\u96BE\u6613\u76F8\u6210\uFF0C\u957F\u77ED\u76F8\u8F83\uFF0C\u9AD8\u4E0B\u76F8\u503E\uFF0C\u97F3\u58F0\u76F8\u548C\uFF08h\xE8\uFF09\uFF0C\u524D\u540E\u76F8\u968F\u3002\u662F\u4EE5\u5723\u4EBA\u5904\u65E0\u4E3A\u4E4B\u4E8B\uFF0C\u884C\u4E0D\u8A00\u4E4B\u6559\uFF0C\u4E07\u7269\u4F5C\u7109\u800C\u4E0D\u8F9E\uFF0C\u751F\u800C\u4E0D\u6709\uFF0C\u4E3A\u800C\u4E0D\u6043\uFF0C\u529F\u6210\u800C\u5F17\u5C45\u3002\u592B\uFF08f\xFA\uFF09\u552F\u5F17\u5C45\uFF0C\u662F\u4EE5\u4E0D\u53BB\u3002
        </p>
        <p>
          \u4E0D\u5C1A\u8D24\uFF0C\u4F7F\u6C11\u4E0D\u4E89\uFF1B\u4E0D\u8D35\u96BE\u5F97\u4E4B\u8D27\uFF0C\u4F7F\u6C11\u4E0D\u4E3A\u76D7\uFF1B\u4E0D\u89C1\uFF08xi\xE0n\uFF09\u53EF\u6B32\uFF0C\u4F7F\u6C11\u5FC3\u4E0D\u4E71\u3002\u662F\u4EE5\u5723\u4EBA\u4E4B\u6CBB\uFF0C\u865A\u5176\u5FC3\uFF0C\u5B9E\u5176\u8179\uFF1B\u5F31\u5176\u5FD7\uFF0C\u5F3A\u5176\u9AA8\u3002\u5E38\u4F7F\u6C11\u65E0\u77E5\u65E0\u6B32\uFF0C\u4F7F\u592B\uFF08f\xFA\uFF09\u667A\u8005\u4E0D\u6562\u4E3A\u4E5F\u3002\u4E3A\u65E0\u4E3A\uFF0C\u5219\u65E0\u4E0D\u6CBB\u3002
        </p>
      </WordBalloon>

      <Space gap={30}>
        {PLACEMENTS_12.map((p) => (
          <WordBalloon background={'#b8cfef'} placement={p} key={p}>
            <div style={{ width: '80px' }}>{p}</div>
          </WordBalloon>
        ))}
      </Space>

      <WordBalloon
        background={'linear-gradient(225deg,#ffdee9,#b5fffc)'}
        showArrow={false}
      >
        {'\u65E0\u7BAD\u5934 '.repeat(5)}
      </WordBalloon>
    </Space>
  );
};

export default App;
`}}]);
