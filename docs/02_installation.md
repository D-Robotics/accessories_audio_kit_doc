---
sidebar_position: 2
---


# 2. 安装方法

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## 物品清单

安装模组需要准备以下物品：

<table className="packing-table">
  <thead>
    <tr>
      <th>物品名称</th>
      <th>物品图片</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RDK 音频拓展板</td>
      <td><img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/packing-audio-expansion-board.png" alt="RDK 音频拓展板" /></td>
    </tr>
    <tr>
      <td>RDK 音频拓展板接口<br/>（如需连接 RDK X5、RDK X5 Module 或 RDK S100/S100P）</td>
      <td><img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/packing-audio-adapter-board.png" alt="RDK 音频拓展板接口" /></td>
    </tr>
    <tr>
      <td>RDK 音频拓展板 4-Mic 阵列<br/>或<br/>RDK 音频拓展板 6-Mic 阵列</td>
      <td><img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/packing-audio-4mic-array.png" alt="RDK 音频拓展板 4-Mic 阵列" /><img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/packing-audio-6mic-array.png" alt="RDK 音频拓展板 6-Mic 阵列" /></td>
    </tr>
    <tr>
      <td>FFC/FPC 排线<br/>同面 36PIN 间距 0.5mm</td>
      <td><img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/packing-ffc-fpc-cable.png" alt="FFC/FPC 排线" /></td>
    </tr>
    <tr>
      <td>音频数字接口线缆<br/>GH1.25-14P 双头反向</td>
      <td><img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/packing-audio-digital-cable.png" alt="音频数字接口线缆" /></td>
    </tr>
    <tr>
      <td>扬声器 × 2<br/>通过 HC1.25 连接器进行连接</td>
      <td><img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/packing-speaker.png" alt="扬声器" /></td>
    </tr>
    <tr>
      <td>开发板<br/>适用板卡中支持的开发板</td>
      <td><img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/packing-development-board.png" alt="开发板" /></td>
    </tr>
  </tbody>
</table>

## 安装与连接

### 连接拓展板与麦克风阵列

将同面 36PIN 0.5mm 间距的 FFC/FPC 排线的一侧接入 RDK 音频拓展板的麦克风阵列接口，另一侧接入 RDK 音频拓展板 4/6-Mic 阵列的麦克风阵列接口，排线的触点方向均朝向 PCB 板。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/connect-expansion-board-mic-array.png" alt="连接拓展板与麦克风阵列" width="50%" />

### 连接音频拓展板与扬声器

通过 HC1.25 连接器将扬声器与拓展板连接，注意将扬声器正负与核心板丝印对齐，以保证双声道极性一致。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/connect-expansion-board-speakers.png" alt="连接音频拓展板与扬声器" width="50%" />

### 连接音频拓展板与开发板

<Tabs groupId="rdk-board">

<TabItem value="RDK X5">

基于 RDK X5 使用 RDK 音频套件时，需使用 RDK 音频拓展板接口将 RDK X5 的 40PIN 接口中的 I2C 与 I2S 管脚转化为线序兼容 RDK 音频套件的音频数字接口。

为 RDK X5 的 40PIN 接口接入 RDK 音频拓展板接口，并使用 GH1.25-14P 双头反向线缆将 RDK 音频拓展板接口的音频数字接口与 RDK 音频拓展板的音频数字接口相连接。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/connect-rdk-x5.png" alt="RDK X5 连接" width="50%" />

</TabItem>

<TabItem value="RDK X5 Module">

基于 RDK X5 Module 核心板，用户可以自行设计底板，将 I2C 与 I2S 管脚集成为和 RDK 音频拓展板接口一致的音频数字接口，本文说明基于 RDK X5 Module 官方载板如何连接 RDK 音频模组。

为 RDK X5 Module 载板的 40PIN 接口接入 RDK 音频拓展板接口，并使用 GH1.25-14P 双头反向线缆将 RDK 音频拓展板接口的音频数字接口与 RDK 音频拓展板的音频数字接口相连接。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/connect-rdk-x5-module.png" alt="RDK X5 Module 连接" width="50%" />

</TabItem>

<TabItem value="RDK S100/S100P">

为 RDK S100 的 40PIN 接口接入 RDK 音频拓展板接口，并使用 GH1.25-14P 双头反向线缆将 RDK 音频拓展板接口的音频数字接口与 RDK 音频拓展板的音频数字接口相连接。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/connect-rdk-s100.png" alt="RDK S100/S100P 连接" width="50%" />

</TabItem>

<TabItem value="RDK S600">

使用 GH1.25-14P 双头反向线缆将 RDK S600 的音频数字接口与 RDK 音频拓展板的音频数字接口相连接。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/connect-rdk-s600.png" alt="RDK S600 连接" width="50%" />

</TabItem>
</Tabs>
#### 设置 USB 模式

对于即插即用场景，也可以通过将拨码开关设置为以下状态（`0XXX`），以将 RDK 音频套件设置为 USB 模式，通过 RDK 音频拓展板上的 USB Type-C 接口连接开发板的 USB 接口，作为 `UAC`（`USB Audio Class`）协议标准音频设备接入。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/dip-switch-usb-0xxx.png" alt="USB 模式拨码开关 0XXX" width="30%" />




