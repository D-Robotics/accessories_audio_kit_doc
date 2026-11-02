---
title: 产品简介
description: 介绍 RDK 音频套件的组成、适用板卡兼容性、硬件接口概览与关键参数。
sidebar_position: 1
---


# 产品简介

RDK™ 音频套件是一款支持全双工多通道录音与播放的音频开发套件。套件包含 RDK™ 音频拓展板、RDK™ 音频拓展板接口，以及 RDK™ 音频拓展板 4-Mic / 6-Mic 阵列。支持 USB 与 I2S 模式切换，单路或双路 I2S 模式切换。支持 8 kHz – 96 kHz 标准采样率，提供双通道播放与 8 通道同步采样，最多支持 6 路麦克风输入与 2 路回采输入，适用于回声消除、声源定位、远场拾音等音频处理，可广泛用于智能会议、语音交互、机器人听觉等应用场景。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/audio-kit-overview.jpeg" alt="RDK 音频套件" width="80%" />

## 适用板卡

下表列举了本产品与 RDK 开发者套件板卡产品的兼容性情况：

| 板卡名称 | 支持情况 | 说明 |
| :--- | :--- | :--- |
| RDK X3 | 不支持 | 未经过测试验证 |
| RDK X3 Module | 不支持 | 未经过测试验证 |
| RDK X5 | 支持 | - |
| RDK X5 Module | 支持 | - |
| RDK S100/S100P | 支持 | - |
| RDK S600 | 支持 | - |

## 硬件接口说明


### RDK 音频拓展板

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/audio-expansion-board-overview.jpeg" alt="RDK 音频拓展板" width="70%" />

| 接口位号 | 接口名称 | 描述 |
| --- | --- | --- |
| K1 | 复位按键 | 用于复位音频模块。 |
| K2 | LOAD 按键 | 用于切换音频模块状态。 |
| S1 | 音频接口选择开关 | 用于选择音频接口、通道数量、参考电平等属性。 |
| J1 | 左声道功放接口 | 用于连接扬声器，播放左声道音频。 |
| J2 | 右声道功放接口 | 用于连接扬声器，播放右声道音频。 |
| J4 | 调试串口 | 内部调试使用，请勿操作。 |
| J7 | USB 接口 | 用于固件烧录与 USB 音频信号传输。 |
| J10 | 音频数字接口 | 用于 I2C 设置与音频信号传输。 |
| J11 | 麦克风阵列接口 | 用于连接 RDK 音频核心板与 RDK 4-Mic 阵列或 6-Mic 阵列。 |

### RDK 音频拓展板接口

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/audio-adapter-board.jpeg" alt="RDK 音频拓展板接口" width="70%" />

| 接口位号 | 接口名称 | 描述 |
| --- | --- | --- |
| J1 | 40PIN 接口 | 用于连接搭载了 40PIN 排针的开发板设备。 |
| J2 | 音频数字接口 | 将音频相关接口引出，用于连接音频模块。 |

### RDK 音频拓展板 4-Mic 阵列

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/audio-4mic-array.jpeg" alt="RDK 音频拓展板 4-Mic 阵列" width="70%" />

| 接口位号 | 接口名称 | 描述 |
| --- | --- | --- |
| J1 | 麦克风阵列接口 | 用于连接 RDK 音频核心板与 RDK 4-Mic 阵列。 |
| MIC1-MIC4 | 1-4 号拾音器 | 用于拾取多点音频信息，形成多通道空间音频。 |

### RDK 音频拓展板 6-Mic 阵列

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/audio-6mic-array.jpeg" alt="RDK 音频拓展板 6-Mic 阵列" width="70%" />

| 接口位号 | 接口名称 | 描述 |
| --- | --- | --- |
| J1 | 麦克风阵列接口 | 用于连接 RDK 音频核心板与 RDK 6-Mic 阵列。 |
| MIC1-MIC6 | 1-6 号拾音器 | 用于拾取多点音频信息，形成多通道空间音频。 |
| LED1-LED6 | 1-6 号 LED 灯 | 用于指示声源方向或用户自定义控制。 |

:::tip 提示

详细硬件说明见 [硬件说明](./04_hardware.md)。

:::

## 关键参数

| 名称 | 描述 |
| --- | --- |
| DAC 型号&数量 | ES8156×1 |
| DAC SNR | 110 dB |
| ADC 型号&数量 | ES7210×2 |
| ADC SNR | 102 dB |
| 输出通道 | 2 路立体声 |
| 输入通道 | 6 路 Mic + 2 功放回采反馈 |
| 支持采样率 | 8 / 11.025 / 16 / 22.05 / 32 / 44.1 / 48 / 88.2 / 96 kHz |
| 数字接口类型 | I2C、I2S、USB |
| 工作温度 | 0-65°C |
