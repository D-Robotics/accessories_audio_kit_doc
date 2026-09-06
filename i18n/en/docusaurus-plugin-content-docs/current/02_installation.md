---
sidebar_position: 2
---


# 2. Installation

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## Packing List

Prepare the following items before installing the module:

<table className="packing-table">
  <thead>
    <tr>
      <th>Item</th>
      <th>Image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RDK Audio Expansion Board</td>
      <td><img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/packing-audio-expansion-board.png" alt="RDK Audio Expansion Board" /></td>
    </tr>
    <tr>
      <td>RDK Audio Expansion Board Adapter<br/>(required to connect RDK X5, RDK X5 Module, or RDK S100/S100P)</td>
      <td><img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/packing-audio-adapter-board.png" alt="RDK Audio Expansion Board Adapter" /></td>
    </tr>
    <tr>
      <td>RDK Audio Expansion Board 4-Mic Array<br/>or<br/>RDK Audio Expansion Board 6-Mic Array</td>
      <td><img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/packing-audio-4mic-array.png" alt="RDK Audio Expansion Board 4-Mic Array" /><img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/packing-audio-6mic-array.png" alt="RDK Audio Expansion Board 6-Mic Array" /></td>
    </tr>
    <tr>
      <td>FFC/FPC cable<br/>same-side contacts, 36-pin, 0.5 mm pitch</td>
      <td><img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/packing-ffc-fpc-cable.png" alt="FFC/FPC cable" /></td>
    </tr>
    <tr>
      <td>Audio digital interface cable<br/>GH1.25-14P, both ends reversed</td>
      <td><img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/packing-audio-digital-cable.png" alt="Audio digital interface cable" /></td>
    </tr>
    <tr>
      <td>Speakers × 2<br/>connected via HC1.25 connectors</td>
      <td><img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/packing-speaker.png" alt="Speakers" /></td>
    </tr>
    <tr>
      <td>Development board<br/>a board from the supported boards list</td>
      <td><img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/packing-development-board.png" alt="Development board" /></td>
    </tr>
  </tbody>
</table>

## Installation and Connection

### Connecting the Expansion Board to the Mic Array

Connect one end of the same-side 36-pin 0.5 mm pitch FFC/FPC cable to the microphone array interface on the RDK Audio Expansion Board, and the other end to the microphone array interface on the RDK Audio Expansion Board 4/6-Mic Array. The contacts of the cable must face the PCB board.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/connect-expansion-board-mic-array.png" alt="Connecting the Expansion Board to the Mic Array" width="50%" />

### Connecting the Expansion Board to the Speakers

Connect the speakers to the expansion board using the HC1.25 connectors. Align the positive and negative terminals of the speakers with the silkscreen on the core board to keep the stereo polarity consistent.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/connect-expansion-board-speakers.png" alt="Connecting the Expansion Board to the Speakers" width="50%" />

### Connecting the Expansion Board to the Development Board

<Tabs groupId="rdk-board">

<TabItem value="RDK X5">

When using the RDK Audio Kit with the RDK X5, use the RDK Audio Expansion Board Adapter to convert the I2C and I2S pins in the 40-pin interface of the RDK X5 into an audio digital interface with a pinout compatible with the RDK Audio Kit.

Connect the RDK Audio Expansion Board Adapter to the 40-pin interface of the RDK X5, and use a GH1.25-14P both-ends-reversed cable to connect the audio digital interface of the RDK Audio Expansion Board Adapter to the audio digital interface of the RDK Audio Expansion Board.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/connect-rdk-x5.png" alt="RDK X5 connection" width="50%" />

</TabItem>

<TabItem value="RDK X5 Module">

Based on the RDK X5 Module core board, you can design your own baseboard to integrate the I2C and I2S pins into an audio digital interface that matches the RDK Audio Expansion Board Adapter. This document describes how to connect the RDK audio module using the official RDK X5 Module carrier board.

Connect the RDK Audio Expansion Board Adapter to the 40-pin interface of the RDK X5 Module carrier board, and use a GH1.25-14P both-ends-reversed cable to connect the audio digital interface of the RDK Audio Expansion Board Adapter to the audio digital interface of the RDK Audio Expansion Board.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/connect-rdk-x5-module.png" alt="RDK X5 Module connection" width="50%" />

</TabItem>

<TabItem value="RDK S100/S100P">

Connect the RDK Audio Expansion Board Adapter to the 40-pin interface of the RDK S100, and use a GH1.25-14P both-ends-reversed cable to connect the audio digital interface of the RDK Audio Expansion Board Adapter to the audio digital interface of the RDK Audio Expansion Board.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/connect-rdk-s100.png" alt="RDK S100/S100P connection" width="50%" />

</TabItem>

<TabItem value="RDK S600">

Use a GH1.25-14P both-ends-reversed cable to connect the audio digital interface of the RDK S600 to the audio digital interface of the RDK Audio Expansion Board.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/connect-rdk-s600.png" alt="RDK S600 connection" width="50%" />

</TabItem>

</Tabs>

#### Configuring USB Mode

For plug-and-play scenarios, you can also set the DIP switch to the following state (`0XXX`) to set the RDK Audio Kit to USB mode, and connect the development board's USB interface to the USB Type-C interface on the RDK Audio Expansion Board to use it as a standard audio device compliant with the `UAC` (`USB Audio Class`) protocol.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/dip-switch-usb-0xxx.png" alt="USB mode DIP switch 0XXX" width="30%" />
