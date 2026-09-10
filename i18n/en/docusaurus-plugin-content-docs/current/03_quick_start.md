---
title: Quick start
description: Covers hardware/software configuration and driver loading for each board, then demonstrates multi-channel recording, stereo playback, and full-duplex recording/playback.
sidebar_position: 3
---


# Quick start

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## Hardware and software configuration

<Tabs groupId="rdk-board">

<TabItem value="RDK X5/Module">

Set the DIP switch of the RDK Audio Kit as follows (`101X`). In this state, the mode is set to I2S, the number of I2S channels is 1, and the I2S reference level is 3V3.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/dip-switch-i2s-101x.png" alt="DIP switch 101X" width="30%" />

Make sure the system image version is RDK OS 3.5.0, then download the following patch packages to the RDK X5 board.

- [hobot-boot_3.1.0-20260623181214_arm64.deb](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/file/hobot-boot_3.1.0-20260623181214_arm64.deb)
- [hobot-dtb_3.0.8-20260623181320_arm64.deb](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/file/hobot-dtb_3.0.8-20260623181320_arm64.deb)
- [hobot-kernel-headers_3.0.4-20260623181144_arm64.deb](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/file/hobot-kernel-headers_3.0.4-20260623181144_arm64.deb)

On the board, run `sudo dpkg -i hobot-*` to install them.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/x5-install-hobot-packages.png" alt="Installing the hobot patch packages" width="80%" /><br/>

Run `srpi-config`, then click **3 Interface Options** > **I5 Audio** > **Audio Driver HAT V2** in order, press Enter, and then select `<Finish>`. Restart as prompted, or run `sudo reboot` yourself to apply all the configuration.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/x5-srpi-config-audio-hat-v2.gif" alt="Configuring Audio Driver HAT V2 in srpi-config" width="80%" /><br/>

If the RDK Audio Kit is correctly installed as described above, after the reboot completes, run `cat /proc/asound/cards` to list all sound cards detected by ALSA. `duplexaudio` is the on-board sound card of the RDK X5, and `duplexaudioi2s1` is the sound card of the RDK Audio Kit, which means the configuration is effective.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/x5-asound-cards.png" alt="RDK X5 ALSA sound card information" width="80%" /><br/>

Run `ls -l /dev/snd` to list the recording and playback nodes. `pcmC0D0p` is the playback node of PCM channel 0 device 0, and `pcmC0D1c` is the recording node of PCM channel 0 device 1, and so on. These two nodes correspond to the RDK Audio Kit on the RDK X5.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/x5-dev-snd.png" alt="RDK X5 /dev/snd nodes" width="80%" /><br/>

</TabItem>

<TabItem value="RDK S100/S100P">

On the RDK S100/S100P, `PCM0` is connected to the Wi-Fi & BT module by default for Bluetooth audio. To use the RDK Audio Kit, set the `PCM0` function switch to `OFF` to route the `PCM0`-related pins to the 40PIN header.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/s100-pcm0-function-switch.jpeg" alt="RDK S100/S100P PCM0 function switch" width="80%" /><br/>

Set the DIP switch of the RDK Audio Kit as follows (`101X`). In this state, the mode is set to I2S, the number of I2S channels is 1, and the I2S reference level is 3V3.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/dip-switch-i2s-101x.png" alt="DIP switch 101X" width="30%" /><br/>

Enter the following commands to load the drivers:

```shell
modprobe hobot_cpudai_super
modprobe snd-soc-es8156
modprobe snd-soc-es7210
modprobe hobot_snd_s100_ac_fdx_host
```

Run `cat /proc/asound/cards` to list all sound cards detected by ALSA. `s100snd2` is the sound card of the RDK Audio Kit, which means the configuration is effective.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/s100-asound-cards.png" alt="RDK S100 ALSA sound card information" width="80%" /><br/>

Run `ls -l /dev/snd` to list the recording and playback nodes. `pcmC0D0c` is the recording node of PCM channel 0 device 0, and `pcmC0D1p` is the playback node of PCM channel 0 device 1, and so on. These two nodes correspond to the RDK Audio Kit on the RDK S100.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/s100-dev-snd.png" alt="RDK S100 /dev/snd nodes" width="80%" /><br/>

</TabItem>

<TabItem value="RDK S600">

Set the DIP switch of the RDK Audio Kit as follows (`100X`) to set the RDK Audio Kit to single-channel full-duplex I2S mode with a 1.8V reference level.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/dip-switch-i2s-100x.png" alt="RDK S600 DIP switch 100X" width="30%" /><br/>

Only the RDK S600 can use dual-channel simplex I2S for recording and playback with independent clocks and independent sample rates. It must be configured as shown below (`110X`). For details, see [Hardware interface description](./04_hardware.md#hardware-interface-description).

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/dip-switch-i2s-110x.png" alt="RDK S600 DIP switch 110X" width="30%" /><br/>

Make sure the system image version is RDK OS 5.1.0, then download the following patch package to the RDK S600.

[linux-image-rdk-s600_6.1.158-rt58-DR-5.1.0-2606301124-g8b1970-gaa81cd-dirty-22_arm64.deb](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/file/linux-image-rdk-s600_6.1.158-rt58-DR-5.1.0-2606301124-g8b1970-gaa81cd-dirty-22_arm64.deb)

On the board, run `sudo dpkg -i hobot-*` to install, and then reboot.

After rebooting, enter the following commands to load the drivers (use the full-duplex commands when the number of I2S channels is 1, and the simplex commands when it is 2):

```shell
# Full-duplex:
modprobe hobot_cpudai_super
modprobe snd-soc-es8156
modprobe snd-soc-es7210
modprobe hobot_snd_super_ac_fdx_host

# Simplex:
modprobe hobot_cpudai_super
modprobe snd-soc-es8156
modprobe snd-soc-es7210
modprobe hobot_snd_super_ac_master
```

Modify the I2S drive capability:

```shell
devmem 0x33805088 32 0x00000033
devmem 0x3380508c 32 0x00000033
devmem 0x34830020 32 0x17171717
```

The above configuration is lost after a reboot.

Run `cat /proc/asound/cards` to list all sound cards detected by ALSA. `s600snd2` is the sound card of the RDK Audio Kit, which means the configuration is effective.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/s600-asound-cards.png" alt="RDK S600 ALSA sound card information" width="80%" /><br/>

Run `ls -l /dev/snd` to list the recording and playback nodes. `pcmC0D0c` is the recording node of PCM channel 0 device 0, and `pcmC0D1p` is the playback node of PCM channel 0 device 1, and so on. These two nodes correspond to the RDK Audio Kit on the RDK S600.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/s600-dev-snd.png" alt="RDK S600 /dev/snd nodes" width="80%" /><br/>

</TabItem>


<TabItem value="USB Mode">

Set the DIP switch to the following state (`0XXX`) to switch the RDK Audio Kit to USB audio mode.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/dip-switch-usb-0xxx.png" alt="USB mode DIP switch 0XXX" width="30%" /><br/>

No driver loading is required. As a standard `UAC` device, the RDK Audio Kit automatically creates its nodes. Run `cat /proc/asound/cards` to list all sound cards detected by ALSA; the entries containing `AudioArray` and USB are the nodes created by the RDK Audio Kit.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/usb-asound-cards.png" alt="USB ALSA sound card information" width="80%" /><br/>

Run `ls -l /dev/snd` to list the recording and playback nodes. `pcmC1D0c` is the recording node of PCM channel 1 device 0, and `pcmC1D1p` is the playback node of PCM channel 1 device 1, and so on. These two nodes correspond to the current RDK Audio Kit.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/usb-dev-snd.png" alt="USB /dev/snd nodes" width="80%" /><br/>

</TabItem>
</Tabs>

## Feature walkthrough

This section uses the RDK X5 + RDK Audio Kit as an example to demonstrate how to record multi-channel audio with the `arecord` tool, play back multi-channel audio with the `aplay` tool, and perform full-duplex recording and playback.

### Record multi-channel audio

Make sure the recording node exists. You can use the `arecord` command to record audio. A brief description of the `arecord` recording usage:

```shell
arecord [options] [output file path]
    -D path:CARD,DEVICE    path can be hw (direct to hardware), plughw (automatic format conversion), or default (default value)
    -d recording duration
    -f sample format    options: S16_LE, S24_LE, S32_LE, etc.
    -r sample rate    common values: 8000/16000/22050/44100/48000/96000, etc.
    -c channel count
```

Here we do not perform format conversion. Assume the sound card channel number shown by `ls -l /dev/snd` is 0 and the recording device number is 1. Use the `S16_LE` format, a sample rate of 16000, and record 8-channel audio for 10 seconds:

```shell
arecord -D hw:0,1 -d 10 -r 16000 -f S16_LE -c 8 record.wav
```

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_audio_kit/arecord-8ch-recording.png" alt="arecord 8-channel recording" width="80%" /><br/>

Note that regardless of whether you use a 4-Mic or 6-Mic array, you must record 8 channels of audio. Among the 8 channels, the first 4/6 channels are the microphones of the mic array, and channels 7 and 8 are the loopback data of the stereo amplifier. When recording with 4 channels, channels 5 and 6 are empty and contain only white noise.

### Play stereo audio

Make sure the playback node exists. You can use the `aplay` command to play audio. A brief description of the `aplay` playback usage:

```bash
aplay [options] [input file path]
    -D path:CARD,DEVICE    path can be hw (direct to hardware), plughw (automatic format conversion), or default (default value)
    -d playback duration (seconds)
    -f sample format    options: S16_LE, S24_LE, S32_LE, etc.
    -r sample rate    common values: 8000/16000/22050/44100/48000/96000, etc.
    -c channel count
```

Assume the sound card channel number shown by `ls -l /dev/snd` is 0 and the playback device number is 0, and play the audio file:

```bash
aplay -D hw:0,0 record.wav
```

The amplifier of the RDK Audio Kit is stereo. When playing multi-channel audio, the `aplay` tool only plays the first 2 channels.

If the sound is too low, use the following commands to adjust the DAC amplifier volume of the RDK Audio Kit. A volume of 75% is recommended for testing.

```bash
amixer -c 0 sset DAC 10%+    # turn up
amixer -c 0 sset DAC 10%-    # turn down
amixer -c 0 sget DAC         # view the current value
amixer -c 0 sset DAC 80%     # set the percentage
```



### Record and play back in full-duplex mode

The recording and playback nodes of the RDK Audio Kit are independent channels, supporting full-duplex recording and playback.

Open two terminals. In the first terminal, play a long audio file:

```bash
aplay -D hw:0,0 demo.wav
```

Place the speaker close to the mic array, and in the second terminal enter the following command to record 5 seconds of audio:

```bash
arecord -D hw:0,1 -d 5 -r 16000 -f S16_LE -c 8 record.wav
```

If you can hear the played audio content in the recorded audio, full-duplex recording and playback is working.

In addition, you can write a program that uses the recording and playback devices simultaneously in two threads or two processes, which also achieves full-duplex recording and playback.

Note that when DIP switch 2 is set to off, a single I2S channel is used for full-duplex recording and playback. Currently the RDK X5 and RDK S100/S100P only support this mode. For the RDK S600, you can set DIP switch 2 to on to use two independent I2S channels for recording and playback separately.

When the number of I2S channels is 1, the sample rate and sample format of playback and recording must be the same, because the recording and playback data channels share the same bit clock.

## Next steps

At this point, you have experienced the basic functions of the RDK Audio Kit.

Next:

- [Mounting instructions](./04_hardware.md#mounting-instructions) describes the structural parameters and installation precautions of the RDK Audio Kit in detail; recommended for structural developers.
- [Hardware interface description](./04_hardware.md#hardware-interface-description) describes the hardware interfaces of the RDK Audio Kit in detail; recommended for hardware developers.
- To develop audio applications using this product with an RDK development board, see the [USB Audio Device Usage Guide](https://developer.d-robotics.cc/case_doc/en/getting_started/usb_peripherals#usb-audio).
- To use audio preprocessing, DOA, VAD, wake word, custom command words, ASR, TTS, and other algorithms based on the RDK Audio Kit, see the [Smart Voice Box](https://developer.d-robotics.cc/tros_doc/en/apps/smart_voice_box?v=3.5.0&p=RDK+X5).
