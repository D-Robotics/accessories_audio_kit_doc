---
sidebar_position: 4
---


# 4. 硬件说明

## 4.1 结构安装说明

RDK 音频拓展板边缘留有 4 个金属化孔，可使用 4×M2.5 螺栓将板卡固定。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/structure-mount-expansion-board.png" alt="RDK 音频拓展板结构安装" width="60%" />

RDK 音频拓展板接口留有 1 个金属化孔，可使用 1×M2.5 螺栓将板卡固定，配合 40PIN 接口紧固安装。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/structure-mount-adapter-board.png" alt="RDK 音频拓展板接口结构安装" width="60%" />

RDK 音频拓展板 4-Mic 阵列留有 4 个金属化孔，可使用 4×M3 螺栓将板卡固定。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/structure-mount-4mic-array.png" alt="RDK 音频拓展板 4-Mic 阵列结构安装" width="60%" />

RDK 音频拓展版 6-Mic 阵列留有 3 个金属化孔，可使用 3×M6 螺栓将板卡固定。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/structure-mount-6mic-array.png" alt="RDK 音频拓展板 6-Mic 阵列结构安装" width="60%" />

:::info 说明
- 安装时，建议合理使用垫圈，并交替锁紧螺栓，避免产品 PCB 板发生断裂以造成产品损坏。
- 如需将麦克风阵列或扬声器安装至密封结构内，需用户根据实际情况自行设计导音结构，避免影响产品录音或播放质量。
- 3D 模型文件详见 [资源下载](./06_downloads.md)。
:::

## 4.2 硬件接口说明

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/audio-expansion-board.jpeg" alt="RDK 音频拓展板接口描述" width="80%" />

### 接口描述

#### J1 左声道功放接口

该接口用于连接左声道扬声器，通过差分信号输出左声道音频，差分极性与 PCB 板丝印对应。

#### J2 右声道功放接口

该接口用于连接右声道扬声器，通过差分信号输出右声道音频，差分极性与 PCB 板丝印对应。

#### J4 调试串口

该接口用于内部调试使用，日常使用时应避免使用该接口。

#### J7 USB 接口

用于音频拓展板固件烧录与 USB 音频（`UAC`）功能使用。

#### J10 音频数字接口

该接口用于将 I2S 和 I2C 信号引出，连接 RDK 音频拓展板接口或 RDK 开发板。

连接器 PIN1 位置与 Mark 点标注一致，线序如下表所示：

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/j10-pinout.png" alt="J10 音频数字接口线序" width="80%" />

| PIN | Name | Description |
| --- | --- | --- |
| 1 | OUTCON_MCLK | 音频 Codec 的 MCLK 信号。 |
| 2 | OUTCON_BCLK | 音频 Codec 的 BCLK 信号，用于同步串行音频数据的传输。 |
| 3 | OUTCON_WS | 音频 Codec 的 WS/LRCK 信号，用于 I2S 帧同步（左右声道选择），频率等于音频采样率。 |
| 4 | OUTCON_SDIN | 连接 DAC 的 DIN 引脚，I2S 串行数据输入，用于播放音频。 |
| 5 | OUTCON_SDOUT1 | 连接 ADC 的 DOUT 引脚，I2S 串行数据输出，用于采集麦克风音频。 |
| 6 | OUTCON_MCLK2 | 音频 Codec 的 MCLK 信号。 |
| 7 | OUTCON_BCLK2 | 音频 Codec 的 BCLK 信号，用于同步串行音频数据的传输。 |
| 8 | OUTCON_WS2 | 音频 Codec 的 WS/LRCK 信号，用于 I2S 帧同步（左右声道选择），频率等于音频采样率。 |
| 9 | N/A |  |
| 10 | OUTCON_SDOUT2 | 连接 ADC 的 DOUT 引脚，I2S 串行数据输出，用于采集麦克风音频。 |
| 11 | OUTCON_I2C_SDA | I2C 数据传输信号。 |
| 12 | OUTCON_I2C_CLK | I2C 时钟信号。 |
| 13 | GND |  |
| 14 | VCC_IN | 电源，4.5V-5.5V |

:::info 说明
通过音频接口选择开关可将音频套件设置为单路或双路 I2S 模式：
- 在单路 I2S 模式下，PIN 6-10 引脚无效，音频信号通过 PIN 1~5 全双工传输，但采样与输出同时进行时，采样通道和输出通道必须位于同一采样率下。
- 在双路 I2S 模式下，音频信号通过 PIN 1~4 单工输出，通过 PIN 6-10 单工进行采样，在这一模式下，采样通道与输出通道可以不位于同一采样率下。
:::
#### J11 麦克风阵列接口

该接口用于连接 RDK 音频核心板与 RDK 4 麦阵列或 6 麦阵列。

连接器 PIN1 位置靠近 Mark 点（最右侧），线序如下表所示：

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/j11-pinout.png" alt="J11 麦克风阵列接口线序" width="80%" />

| PIN | Name | Description |
| --- | --- | --- |
| 1 | LED1+ |  |
| 2 | LED1- |  |
| 3 | LED2+ |  |
| 4 | LED2- |  |
| 5 | LED3+ |  |
| 6 | LED3- |  |
| 7 | LED4+ |  |
| 8 | LED4- |  |
| 9 | LED5+ |  |
| 10 | LED5- |  |
| 11 | LED6+ |  |
| 12 | LED6- |  |
| 13 | MIC1N_B | Mic 差分信号输出 |
| 14 | MIC1P_B | Mic 差分信号输出 |
| 15 | MICBIAS1_B | Mic 偏置电压 |
| 16 | AGND |  |
| 17 | MIC2P_B | Mic 差分信号输出 |
| 18 | MIC2N_B | Mic 差分信号输出 |
| 19 | MICBIAS2_B | Mic 偏置电压 |
| 20 | AGND |  |
| 21 | MIC1N_A | Mic 差分信号输出 |
| 22 | MIC1P_A | Mic 差分信号输出 |
| 23 | MICBIAS1_A | Mic 偏置电压 |
| 24 | AGND |  |
| 25 | MIC2P_A | Mic 差分信号输出 |
| 26 | MIC2N_A | Mic 差分信号输出 |
| 27 | MICBIAS2_A | Mic 偏置电压 |
| 28 | AGND |  |
| 29 | MIC3N_A | Mic 差分信号输出 |
| 30 | MIC3P_A | Mic 差分信号输出 |
| 31 | MICBIAS3_A | Mic 偏置电压 |
| 32 | AGND |  |
| 33 | MIC4P_A | Mic 差分信号输出 |
| 34 | MIC4N_A | Mic 差分信号输出 |
| 35 | MICBIAS4_A | Mic 偏置电压 |
| 36 | AGND |  |

#### K1 RST 按键

该接口用于 Reset 音频套件状态，正常使用过程中应避免使用。

#### K2 LOAD 按键

该接口用于加载音频板卡的调试模式，正常使用过程中应避免使用。

#### S1 音频接口选择开关

该接口是一个 4 通道拨码开关，用于选择音频接口、通道数量、参考电平等属性。默认状态如下， 4 个通道均为置 0 状态，使用镊子将对应通道上拨，可将对应通道置 1，拨码状态表如下：

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/s1-dip-switch.png" alt="S1 拨码开关" width="80%" />

| PIN | Name | Description |
| --- | --- | --- |
| 1 | USB/I2S 选择 | 0：I2S 模式<br/>1：USB 模式 |
| 2 | I2S 通道数选择 | 0：单通道<br/>1：双通道（适用于 RDK S600 的音频接口） |
| 3 | I2S 电平选择 | 0：1.8V<br/>1：3.3V |
| 4 | N/A |  |

#### 连接器型号

| 连接器 | 连接器型号 | 连接器厂商 |
| --- | --- | --- |
| J1、J2 | HC-1.25-2PWT | - |
| J10 | X1251WRS-14HF-LPSW | 中国星坤 |
