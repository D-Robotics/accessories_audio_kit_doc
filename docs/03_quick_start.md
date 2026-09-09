---
sidebar_position: 3
---


# 3. 快速开始

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## 软硬件配置

<Tabs groupId="rdk-board">

<TabItem value="RDK X5/Module">

将 RDK 音频套件的拨码开关设置如下（101X），该状态设置模式为 I2S，I2S 通道数为 1，I2S 参考电平为 3V3。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/dip-switch-i2s-101x.png" alt="拨码开关 101X" width="30%" />

保证系统镜像版本 = RDK OS 3.5.0，将以下补丁包下载到 RDK X5 板卡中。

- [hobot-boot_3.1.0-20260623181214_arm64.deb](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/file/hobot-boot_3.1.0-20260623181214_arm64.deb)
- [hobot-dtb_3.0.8-20260623181320_arm64.deb](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/file/hobot-dtb_3.0.8-20260623181320_arm64.deb)
- [hobot-kernel-headers_3.0.4-20260623181144_arm64.deb](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/file/hobot-kernel-headers_3.0.4-20260623181144_arm64.deb)

在板端键入 `sudo dpkg -i hobot-*` 安装它们。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/x5-install-hobot-packages.png" alt="安装 hobot 补丁包" width="80%" /><br/>

键入 `srpi-config`，依次点击**3 Interface Options**->**I5 Audio**->**Audio Driver HAT V2**，按下回车，然后选择 `<Finish>`，根据指引选择重启，或者自行键入命令 `sudo reboot` 使所有配置生效。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/x5-srpi-config-audio-hat-v2.gif" alt="srpi-config 配置 Audio Driver HAT V2" width="80%" /><br/>

如果按照前文说明正确安装了 RDK 音频套件，重启完成后，键入 `cat /proc/asound/cards` 查看ALSA检测到的所有声卡信息，其中 `duplexaudio` 是 RDK X5 板端自带的声卡，`duplexaudioi2s1` 则是 RDK 音频套件的声卡，配置有效。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/x5-asound-cards.png" alt="RDK X5 ALSA 声卡信息" width="80%" /><br/>

键入 `ls -l /dev/snd` 可以查看录音与播放节点，其中 `pcmC0D0p` 表示PCM 通道 0 设备 0 的播放节点，`pcmC0D1c` 表示PCM 通道 0 设备 1 的录音节点，以此类推，这两个节点就是 RDK X5 上 RDK 音频套件的对应节点。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/x5-dev-snd.png" alt="RDK X5 /dev/snd 节点" width="80%" /><br/>

</TabItem>

<TabItem value="RDK S100/S100P">

RDK S100/S100P 的 `PCM0` 默认接入 Wi-Fi & BT 模块，用于蓝牙音频功能，为使用 RDK 音频套件，需要将 `PCM0` 功能切换开关拨到 `OFF`，以将 `PCM0` 相关引脚接入 40PIN 引脚。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/s100-pcm0-function-switch.jpeg" alt="RDK S100/S100P PCM0 功能切换开关" width="80%" /><br/>

将 RDK 音频套件的拨码开关设置如下（101X），该状态设置模式为 I2S，I2S 通道数为 1，I2S 参考电平为 3V3。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/dip-switch-i2s-101x.png" alt="拨码开关 101X" width="30%" /><br/>

输入以下命令加载驱动：

```shell
modprobe hobot_cpudai_super
modprobe snd-soc-es8156
modprobe snd-soc-es7210
modprobe hobot_snd_s100_ac_fdx_host
```

键入 `cat /proc/asound/cards` 查看ALSA检测到的所有声卡信息，其中`s100snd2`是 RDK 音频套件的声卡，配置有效。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/s100-asound-cards.png" alt="RDK S100 ALSA 声卡信息" width="80%" /><br/>

键入 `ls -l /dev/snd` 可以查看录音与播放节点，其中 `pcmC0D0c` 表示PCM 通道 0 设备 0 的录制节点，`pcmC0D1p` 表示PCM 通道 0 设备 1 的播放节点，以此类推，这两个节点就是 RDK S100 上 RDK 音频套件的对应节点。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/s100-dev-snd.png" alt="RDK S100 /dev/snd 节点" width="80%" /><br/>

</TabItem>

<TabItem value="RDK S600">

将 RDK 音频套件的拨码开关设置如下（100X），设置 RDK 音频套件为 1.8V 参考电平的 单路全双工 I2S 模式。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/dip-switch-i2s-100x.png" alt="RDK S600 拨码开关 100X" width="30%" /><br/>

仅 S600 可以使用双路单工 I2S 通道进行独立时钟、独立采样率的录制与播放，需配置为下图（110X），详见 [硬件接口说明](./04_hardware.md#42-硬件接口说明)。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/dip-switch-i2s-110x.png" alt="RDK S600 拨码开关 110X" width="30%" /><br/>

保证系统镜像版本 = RDK OS 5.1.0，将以下补丁包下载到 RDK S600 中。

[linux-image-rdk-s600_6.1.158-rt58-DR-5.1.0-2606301124-g8b1970-gaa81cd-dirty-22_arm64.deb](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/file/linux-image-rdk-s600_6.1.158-rt58-DR-5.1.0-2606301124-g8b1970-gaa81cd-dirty-22_arm64.deb)

在板端键入 `sudo dpkg -i hobot-*` 安装，然后重启。

重启后，输入以下命令加载驱动（I2S 通道数为 1 使用全双工部分命令，为 2 使用单工部分命令）：

```shell
# 全双工：
modprobe hobot_cpudai_super
modprobe snd-soc-es8156
modprobe snd-soc-es7210
modprobe hobot_snd_super_ac_fdx_host

# 单工：
modprobe hobot_cpudai_super
modprobe snd-soc-es8156
modprobe snd-soc-es7210
modprobe hobot_snd_super_ac_master
```

修改 I2S 驱动能力：

```shell
devmem 0x33805088 32 0x00000033
devmem 0x3380508c 32 0x00000033
devmem 0x34830020 32 0x17171717
```

以上配置重启后失效。

键入 `cat /proc/asound/cards` 查看ALSA检测到的所有声卡信息，其中 `s600snd2` 是 RDK 音频套件的声卡，配置有效。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/s600-asound-cards.png" alt="RDK S600 ALSA 声卡信息" width="80%" /><br/>

键入 `ls -l /dev/snd` 可以查看录音与播放节点，其中 `pcmC0D0c` 表示PCM 通道 0 设备 0 的录制节点，`pcmC0D1p` 表示PCM 通道 0 设备 1 的播放节点，以此类推，这两个节点就是 RDK S600 上 RDK 音频套件的对应节点。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/s600-dev-snd.png" alt="RDK S600 /dev/snd 节点" width="80%" /><br/>

</TabItem>

<TabItem value="USB 模式">

将拨码开关设置为以下状态（0XXX），可以将 RDK 音频套件切换到 USB 音频模式。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/dip-switch-usb-0xxx.png" alt="USB 模式拨码开关 0XXX" width="30%" /><br/>

无需加载驱动，RDK 音频套件作为 `UAC` 标准设备会自动生成节点，键入 `cat /proc/asound/cards` 查看ALSA检测到的所有声卡信息，其中带有 `AudioArray` 和 USB 等字样的就是 RDK 音频套件生成的节点。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/usb-asound-cards.png" alt="USB ALSA 声卡信息" width="80%" /><br/>

键入 `ls -l /dev/snd` 可以查看录音与播放节点，其中 `pcmC1D0c` 表示PCM 通道 1 设备 0 的录制节点，`pcmC1D1p` 表示PCM 通道 1 设备 1 的播放节点，以此类推，这两个节点就是当前 RDK 音频套件的对应节点。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/usb-dev-snd.png" alt="USB /dev/snd 节点" width="80%" /><br/>

</TabItem>
</Tabs>



## 功能体验

本处以 RDK X5 + RDK 音频套件为例，展示如何使用 `arecord` 工具录制多通道音频、使用 `aplay` 工具播放多声道音频、全双工录制播放。

### 录制多通道音频

保证录音节点存在，可以使用 `arecord` 命令录制音频，简单描述 `arecord` 命令录音用法：

```shell
arecord [选项] [输出文件路径]
    -D 通路:CARD,DEVICE    通路可选 hw(直通硬件) plughw(自动格式转换) default(默认值)
    -d 录制时长 
    -f 采样格式    可选 S16_LE S24_LE S32_LE 等
    -r 采样率    常用 8000/16000/22050/44100/48000/96000 等
    -c 通道数量
```

这里我们不做格式转换，假设 `ls -l /dev/snd` 查看到的声卡通道号为 0，播放设备号为 1，使用 `S16_LE` 格式，采样率 16000，录制 8 通道音频 10 秒：

```shell
arecord -D hw:0,1 -d 10 -r 16000 -f S16_LE -c 8 record.wav
```

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/arecord-8ch-recording.png" alt="arecord 8 通道录音" width="80%" /><br/>

这里需要注意，不论使用 4 麦或 6 麦帧率，都需要录制 8 通道音频，在 8 通道中，前 4/6 通道为麦克风阵列对应的拾音器，第 7、8 通道是双声道功放的回采数据，4 通道录制时，第 5、6 通道为空，仅包含白噪声。

### 播放双声道音频

保证播放节点存在，可以使用 `aplay` 查看播放音频，简单描述 `aplay` 命令播放用法：

```bash
aplay [选项] [输入文件路径]
    -D 通路:CARD,DEVICE    通路可选 hw(直通硬件) plughw(自动格式转换) default(默认值)
    -d 播放时长（秒）
    -f 采样格式    可选 S16_LE S24_LE S32_LE 等
    -r 采样率    常用 8000/16000/22050/44100/48000/96000 等
    -c 通道数量
```

假设 `ls -l /dev/snd` 查看到的声卡通道号为 0，录音设备号为 0，播放音频文件：

```bash
aplay -D hw:0,0 record.wav
```

RDK 音频套件的功放为双声道，播放多通道音频时，`aplay` 工具只播放前 2 条通道。

如果声音过小，可以使用以下命令调整 RDK 音频套件的 DAC 功放音量，建议设置为 75% 测试。

```bash
amixer -c 0 sset DAC 10%+    # 调大
amixer -c 0 sset DAC 10%-    # 调小
amixer -c 0 sget DAC         # 查看当前值
amixer -c 0 sset DAC 80%     # 设置百分比
```

### 全双工录制播放

RDK 音频套件的录音与播放节点均为独立通道，支持全双工录制播放。

启动 2 个终端，在第一个终端中播放较长的音频：

```bash
aplay -D hw:0,0 demo.wav
```

将扬声器靠近麦克风阵列，在第二个终端中输入以下命令，录制 5 秒音频：

```bash
arecord -D hw:0,1 -d 3 -r 16000 -f S16_LE -c 8 record.wav
```

在录制到的音频中可以听到播放的音频内容，验证全双工录播有效。

除此之外，也可以编写程序，在两个线程或两个程序中同时使用录音和播放设备，同样可以进行全双工录制与播放。

需要注意的是，拨码开关 2 设为 off 时，使用 1 路 I2S 进行全双工录播，目前 RDK X5 和 RDK S100/S100P 仅支持该模式，对于 RDK S600，可以将拨码开关 2 设为 on，以使用 2 路独立 I2S 分别进行录制与播放。

I2S 通道数为 1 时，播放与录制的采样率和采样格式必须一致，因为录制与播放数据通道使用相同的位时钟。

## 下一步指引

至此，RDK 音频套件基本功能已体验完成。

接下来：

- [4.1.结构安装说明](./04_hardware.md#41-结构安装说明) 中详细说明了 RDK 音频套件的结构参数与安装注意事项，建议结构开发者阅读；
- [4.2.硬件接口说明](./04_hardware.md#42-硬件接口说明) 中详细介绍了 RDK 音频套件各接口的硬件描述，建议硬件开发者阅读；
- 使用本产品结合 RDK 开发板进行音频应用开发，见 [USB 音频设备使用指南](https://developer.d-robotics.cc/case_doc/getting_started/usb_peripherals#usb-%E9%9F%B3%E9%A2%91%E8%AE%BE%E5%A4%87)。
- 基于 RDK 音频套件使用音频前处理、DOA、VAD、语音唤醒、自定义命令词、ASR、TTS 等算法，见 [智能语音盒子](https://developer.d-robotics.cc/tros_doc/apps/smart_voice_box?v=3.5.0&p=RDK+X5)。
