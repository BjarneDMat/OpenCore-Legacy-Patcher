(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{259:function(e,t,a){e.exports=a.p+"assets/img/usb11-chart.5b4b5b26.png"},283:function(e,t,a){e.exports=a.p+"assets/img/OCLP-GUI-Settings-SIP-Enabled.f95aadf0.png"},284:function(e,t,a){e.exports=a.p+"assets/img/OCLP-GUI-Settings-SIP-Root-Patch.b983af09.png"},285:function(e,t,a){e.exports=a.p+"assets/img/OCLP-GUI-Settings-SIP-Disabled.960a27d1.png"},355:function(e,t,a){e.exports=a.p+"assets/img/Error-No-Permission-To-Save.8399f8b7.png"},356:function(e,t,a){e.exports=a.p+"assets/img/OCLP-GUI-SMBIOS-Minimal.c35b43de.png"},357:function(e,t,a){e.exports=a.p+"assets/img/Hash-Mismatch.add9f660.png"},358:function(e,t,a){e.exports=a.p+"assets/img/wipe-volume.a6acd424.png"},414:function(e,t,a){"use strict";a.r(t);var o=a(10),r=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),t("p",[e._v("Here are some common errors that users may experience while using this patcher:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#opencore-legacy-patcher-not-launching"}},[e._v("OpenCore Legacy Patcher not launching")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#you-don-t-have-permission-to-save-error-when-creating-usb-installer"}},[e._v('"You don\'t have permission to save..." error when creating USB installer')])]),e._v(" "),t("li",[t("a",{attrs:{href:"#stuck-on-this-version-of-mac-os-x-is-not-supported-on-this-platform-or-%F0%9F%9A%AB-prohibited-symbol"}},[e._v("Stuck on "),t("code",[e._v("This version of Mac OS X is not supported on this platform")]),e._v(" or (🚫) Prohibited Symbol")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#cannot-boot-macos-without-the-usb"}},[e._v("Cannot boot macOS without the USB")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#infinite-recovery-os-reboot"}},[e._v("Infinite Recovery OS Booting")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#stuck-on-boot-after-root-patching"}},[e._v("Stuck on boot after root patching")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#unable-to-resolve-dependencies-error-code-71-when-root-patching"}},[e._v('"Unable to resolve dependencies, error code 71" when root patching')])]),e._v(" "),t("li",[t("a",{attrs:{href:"#reboot-when-entering-hibernation-sleep-wake-failure"}},[e._v("Reboot when entering Hibernation ("),t("code",[e._v("Sleep Wake Failure")]),e._v(")")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#how-to-boot-recovery-through-opencore-legacy-patcher"}},[e._v("How to Boot Recovery through OpenCore Legacy Patcher")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#stuck-on-your-mac-needs-a-firmware-update"}},[e._v('Stuck on "Your Mac needs a firmware update"')])]),e._v(" "),t("li",[t("a",{attrs:{href:"#no-brightness-control"}},[e._v("No Brightness Control")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#cannot-connect-Wi-Fi-on-Monterey-with-legacy-cards"}},[e._v("Cannot connect Wi-Fi on Monterey with legacy cards")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#no-graphics-acceleration"}},[e._v("No Graphics Acceleration")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#black-screen-on-macbookpro113-in-macos-monterey"}},[e._v("Black Screen on MacBookPro11,3 in macOS Monterey")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#no-displayport-output-on-mac-pros-with-NVIDIA-kepler"}},[e._v("No DisplayPort Output on Mac Pros with NVIDIA Kepler")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#volume-hash-mismatch-error-in-macos-monterey"}},[e._v("Volume Hash Mismatch Error in macOS Monterey")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#cannot-disable-sip-in-recoveryos"}},[e._v("Cannot Disable SIP in recoveryOS")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#stuck-on-less-than-a-minute-remaining"}},[e._v('Stuck on "Less than a minute remaining..."')])]),e._v(" "),t("li",[t("a",{attrs:{href:"#no-acceleration-after-a-metal-gpu-swap-on-mac-pro"}},[e._v("No acceleration after a Metal GPU swap on Mac Pro")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#keyboard-mouse-and-trackpad-not-working-in-installer-or-after-update"}},[e._v("Keyboard, Mouse and Trackpad not working in installer or after update")])]),e._v(" "),t("li",[t("a",{attrs:{href:"##no-t1-functionality-after-installing-sonoma-or-newer"}},[e._v("No T1 functionality after installing Sonoma or newer")])])]),e._v(" "),t("h2",{attrs:{id:"opencore-legacy-patcher-not-launching"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#opencore-legacy-patcher-not-launching"}},[e._v("#")]),e._v(" OpenCore Legacy Patcher not launching")]),e._v(" "),t("p",[e._v("If the application won't launch (e.g. icon will bounce in the Dock), try launching OCLP via Terminal by typing the following command, make sure you've moved the app to "),t("code",[e._v("/Applications")]),e._v(" before this.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("/Applications/OpenCore-Patcher.app/Contents/MacOS/OpenCore-Patcher\n")])])]),t("h2",{attrs:{id:"you-don-t-have-permission-to-save-error-when-creating-usb-installer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#you-don-t-have-permission-to-save-error-when-creating-usb-installer"}},[e._v("#")]),e._v(' "You don\'t have permission to save..." error when creating USB installer')]),e._v(" "),t("p",[e._v('In some cases, a following error saying "The bless of the installer disk failed" stating the reason as "You don\'t have permission to save..." may appear.')]),e._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:a(355),alt:"NoPermissionToSave",width:"400"}})]),e._v(" "),t("p",[e._v("To resolve this, you may try adding Full Disk Access permission for OpenCore Legacy Patcher. To add it, first go to the settings")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Ventura and Sonoma: Go to System Settings -> Privacy and Security -> Full Disk Access")])]),e._v(" "),t("li",[t("p",[e._v("Big Sur and Monterey: Go to System Preferences -> Security and Privacy -> Full Disk Access")])])]),e._v(" "),t("p",[e._v("Enable OpenCore-Patcher in the list. If not found on the list, press the + sign to add a new entity and find OpenCore Legacy Patcher from Applications.")]),e._v(" "),t("p",[e._v("Restart OpenCore Legacy Patcher and try creating your USB drive again.")]),e._v(" "),t("p",[e._v("Optional: After you've created your USB drive, you can remove OpenCore Legacy Patcher from Full Disk Access again.")]),e._v(" "),t("h2",{attrs:{id:"stuck-on-this-version-of-mac-os-x-is-not-supported-on-this-platform-or-🚫-prohibited-symbol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-this-version-of-mac-os-x-is-not-supported-on-this-platform-or-🚫-prohibited-symbol"}},[e._v("#")]),e._v(" Stuck on "),t("code",[e._v("This version of Mac OS X is not supported on this platform")]),e._v(" or (🚫) Prohibited Symbol")]),e._v(" "),t("p",[e._v("This means macOS has detected an SMBIOS it does not support. To resolve this, ensure you're booting OpenCore "),t("strong",[e._v("before")]),e._v(" the macOS installer in the boot picker. Reminder that the option will be called "),t("code",[e._v("EFI Boot")]),e._v(".")]),e._v(" "),t("p",[e._v("Once you've booted OpenCore at least once, your hardware should now auto-boot it until either an NVRAM reset occurs, or you remove the drive with OpenCore installed.")]),e._v(" "),t("p",[e._v("However, if the 🚫 Symbol only appears after the boot process has already started (the bootscreen appears/verbose boot starts), it could mean that your USB drive has failed to pass macOS' integrity checks. To resolve this, create a new installer using a different USB drive (preferably of a different model.)")]),e._v(" "),t("h2",{attrs:{id:"cannot-boot-macos-without-the-usb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cannot-boot-macos-without-the-usb"}},[e._v("#")]),e._v(" Cannot boot macOS without the USB")]),e._v(" "),t("p",[e._v("By default, the OpenCore Patcher won't install OpenCore onto the internal drive itself during installs.")]),e._v(" "),t("p",[e._v("After installing macOS, OpenCore Legacy Patcher should automatically prompt you to install OpenCore onto the internal drive. However, if it doesn't show the prompt, you'll need to either "),t("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/oc2hdd.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("manually transfer"),t("OutboundLink")],1),e._v(" OpenCore to the internal drive's EFI or Build and Install again and select your internal drive.")]),e._v(" "),t("p",[e._v("Reminder that once this is done, you'll need to select OpenCore in the boot picker again for your hardware to remember this entry and auto boot from then on.")]),e._v(" "),t("h2",{attrs:{id:"infinite-recovery-os-booting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#infinite-recovery-os-booting"}},[e._v("#")]),e._v(" Infinite Recovery OS Booting")]),e._v(" "),t("p",[e._v("With OpenCore Legacy Patcher, we rely on Apple Secure Boot to ensure OS updates work correctly and reliably with Big Sur. However this installs NVRAM variables that will confuse your Mac if not running with OpenCore. To resolve this, simply uninstall OpenCore and "),t("a",{attrs:{href:"https://support.apple.com/en-mide/HT201255",target:"_blank",rel:"noopener noreferrer"}},[e._v("reset NVRAM"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("ul",[t("li",[e._v("Note: Machines with modified root volumes will also result in an infinite recovery loop until integrity is restored.")])]),e._v(" "),t("h2",{attrs:{id:"stuck-on-boot-after-root-patching"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-boot-after-root-patching"}},[e._v("#")]),e._v(" Stuck on boot after root patching")]),e._v(" "),t("p",[e._v("Boot into recovery by pressing space when your disk is selected on the OCLP bootpicker (if you have it hidden, hold ESC while starting up)")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Note:")]),e._v(' If your disk name is something else than "Macintosh HD", make sure to change the path accordingly. You can figure out your disk name by typing '),t("code",[e._v("ls /Volumes")]),e._v(".")])]),e._v(" "),t("p",[e._v("Go into terminal and first mount the disk by typing")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mount")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-uw")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/Volumes/Macintosh HD"')]),e._v("\n")])])]),t("p",[e._v("Then revert the snapshot")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("bless "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--mount")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/Volumes/Macintosh HD"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--bootefi")]),e._v(" --last-sealed-snapshot\n")])])]),t("p",[e._v("Now we're going to clean the /Library/Extensions folder from offending kexts while keeping needed ones.")]),e._v(" "),t("p",[e._v("Run the following and "),t("strong",[e._v("make sure to type it carefully")])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("If you have "),t("strong",[e._v("FileVault 2 enabled")]),e._v(", you will need to mount the Data volume first. This can be done in Disk Utility by locating your macOS volume name, selecting its Data volume, and selecting the Mount option in the toolbar.")])]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/Volumes/Macintosh HD - Data/Library/Extensions"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-v")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"HighPoint*\\|SoftRAID*"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("xargs")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-rf")]),e._v("\n")])])]),t("p",[e._v("Then restart and now your system should be restored to the unpatched snapshot and should be able to boot again.")]),e._v(" "),t("h2",{attrs:{id:"unable-to-resolve-dependencies-error-code-71-when-root-patching"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unable-to-resolve-dependencies-error-code-71-when-root-patching"}},[e._v("#")]),e._v(' "Unable to resolve dependencies, error code 71" when root patching')]),e._v(" "),t("p",[e._v("If you're getting this error, it typically means you have some offending kernel extensions, to fix this you will have to clear them.")]),e._v(" "),t("p",[e._v("Semi-automated way:")]),e._v(" "),t("ol",[t("li",[e._v("Open Terminal")]),e._v(" "),t("li",[e._v("Type "),t("code",[e._v("sudo zsh")])]),e._v(" "),t("li",[e._v("Type "),t("code",[e._v('cd "/Volumes/Macintosh HD/Library/Extensions" && ls | grep -v "HighPoint*\\|SoftRAID*" | xargs rm -rf')]),e._v(" "),t("ul",[t("li",[e._v('Make sure to rename "Macintosh HD" to what your drive name is')])])]),e._v(" "),t("li",[e._v("Run OCLP root patcher again")])]),e._v(" "),t("p",[e._v("Manual way:")]),e._v(" "),t("ol",[t("li",[e._v("Navigate to /Library/Extensions")]),e._v(" "),t("li",[e._v("Delete everything "),t("strong",[e._v("except")]),e._v(" HighPointIOP.kext, HighPointRR.kext and SoftRAID.kext")]),e._v(" "),t("li",[e._v("Run OCLP root patcher again")])]),e._v(" "),t("p",[e._v('If there is no success, navigate to "/Library/Developer/KDKs" and delete everything.')]),e._v(" "),t("p",[e._v("If still no success, type "),t("code",[e._v('sudo bless --mount "/Volumes/Macintosh HD/" --bootefi --last-sealed-snapshot')])]),e._v(" "),t("ul",[t("li",[e._v('Make sure again to rename "Macintosh HD" to what your drive name is')])]),e._v(" "),t("p",[e._v("Run OCLP root patcher again.")]),e._v(" "),t("h2",{attrs:{id:"reboot-when-entering-hibernation-sleep-wake-failure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reboot-when-entering-hibernation-sleep-wake-failure"}},[e._v("#")]),e._v(" Reboot when entering Hibernation ("),t("code",[e._v("Sleep Wake Failure")]),e._v(")")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/dortania/Opencore-Legacy-Patcher/issues/72",target:"_blank",rel:"noopener noreferrer"}},[e._v("Known issue on some models"),t("OutboundLink")],1),e._v(", a temporary fix is to disable Hibernation by executing the following command in the terminal:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo pmset -a hibernatemode 0\n")])])]),t("h2",{attrs:{id:"how-to-boot-recovery-through-opencore-legacy-patcher"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-boot-recovery-through-opencore-legacy-patcher"}},[e._v("#")]),e._v(" How to Boot Recovery through OpenCore Legacy Patcher")]),e._v(" "),t("p",[e._v("By default, the patcher will try to hide extra boot options such as recovery from the user. To make them appear, simply press the "),t("code",[e._v("Spacebar")]),e._v(" key while inside OpenCore's Picker to list all boot options.")]),e._v(" "),t("h2",{attrs:{id:"stuck-on-your-mac-needs-a-firmware-update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-your-mac-needs-a-firmware-update"}},[e._v("#")]),e._v(' Stuck on "Your Mac needs a firmware update"')]),e._v(" "),t("p",[e._v('Full error: "Your Mac needs a firmware update in order to install to this Volume. Please select a Mac OS Extended (Journaled) volume instead."')]),e._v(" "),t("p",[e._v('This error occurs when macOS determines that the current firmware does not have full APFS support. To resolve this, when installing OpenCore, head to "Patcher Settings" and enable "Moderate SMBIOS Patching" or higher. This will ensure that the firmware reported will show support for full APFS capabilities.')]),e._v(" "),t("h2",{attrs:{id:"no-brightness-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#no-brightness-control"}},[e._v("#")]),e._v(" No Brightness Control")]),e._v(" "),t("p",[e._v("With OCLP v0.0.22, we've added support for brightness control on many models. However, some users may have noticed that their brightness keys do not work.")]),e._v(" "),t("p",[e._v("As a work-around, we recommend users try out the below app:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://actproductions.net/free-apps/brightness-slider/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Brightness Slider"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"cannot-connect-wi-fi-on-monterey-with-legacy-cards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cannot-connect-wi-fi-on-monterey-with-legacy-cards"}},[e._v("#")]),e._v(" Cannot connect Wi-Fi on Monterey with legacy cards")]),e._v(" "),t("p",[e._v("With OCLP v0.2.5, we've added support for legacy Wi-Fi on Monterey. However, some users may have noticed that they can't connect to wireless networks.")]),e._v(" "),t("p",[e._v('To work-around this, we recommend that users manually connect using the "Other" option in the Wi-Fi menu bar or manually adding the network in the "Network" preference pane.')]),e._v(" "),t("h2",{attrs:{id:"no-graphics-acceleration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#no-graphics-acceleration"}},[e._v("#")]),e._v(" No Graphics Acceleration")]),e._v(" "),t("p",[e._v("In macOS, GPU drivers are often dropped from the OS with each major release of it. With macOS Big Sur, currently, all non-Metal GPUs require additional patches to gain acceleration. In addition, macOS Monterey removed Graphics Drivers for both Intel Ivy Bridge and NVIDIA Kepler graphics processors.")]),e._v(" "),t("p",[e._v("If you're using OCLP v0.4.4, you should have been prompted to install Root Volume patches after the first boot from installation of macOS. If you need to do this manually, you can do so within the patcher app. Once rebooted, acceleration will be re-enabled as well as brightness control for laptops.")]),e._v(" "),t("h2",{attrs:{id:"black-screen-on-macbookpro11-3-in-macos-monterey"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#black-screen-on-macbookpro11-3-in-macos-monterey"}},[e._v("#")]),e._v(" Black Screen on MacBookPro11,3 in macOS Monterey")]),e._v(" "),t("p",[e._v("Due to Apple dropping NVIDIA Kepler support in macOS Monterey, "),t("a",{attrs:{href:"https://github.com/dortania/OpenCore-Legacy-Patcher/issues/522",target:"_blank",rel:"noopener noreferrer"}},[e._v("MacBookPro11,3's GMUX has difficulties switching back to the iGPU to display macOS correctly."),t("OutboundLink")],1),e._v(" To work-around this issue, boot the MacBookPro11,3 in Safe Mode and once macOS is installed, run OCLP's Post Install Root Patches to enable GPU Acceleration for the NVIDIA dGPU.")]),e._v(" "),t("ul",[t("li",[e._v("Safe Mode can be started by holding "),t("code",[e._v("Shift")]),e._v(" + "),t("code",[e._v("Enter")]),e._v(" when selecting macOS Monterey in OCLP's Boot Menu.")])]),e._v(" "),t("h2",{attrs:{id:"no-displayport-output-on-mac-pros-with-nvidia-kepler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#no-displayport-output-on-mac-pros-with-nvidia-kepler"}},[e._v("#")]),e._v(" No DisplayPort Output on Mac Pros with NVIDIA Kepler")]),e._v(" "),t("p",[e._v("If you're having trouble with DisplayPort output on Mac Pros, try enabling Minimal Spoofing in Settings -> SMBIOS Settings and rebuild/install OpenCore. This will trick macOS drivers into thinking you have a newer MacPro7,1 and resolve the issue.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(356),alt:""}})]),e._v(" "),t("h2",{attrs:{id:"volume-hash-mismatch-error-in-macos-monterey"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#volume-hash-mismatch-error-in-macos-monterey"}},[e._v("#")]),e._v(" Volume Hash Mismatch Error in macOS Monterey")]),e._v(" "),t("p",[e._v('A semi-common popup some users face is the "Volume Hash Mismatch" error:')]),e._v(" "),t("p",{attrs:{align:"center"}},[t("img",{attrs:{src:a(357)}})]),e._v(" "),t("p",[e._v("What this error signifies is that the OS detects that the boot volume's hash does not match what the OS is expecting, this error is generally cosmetic and can be ignored. However if your system starts to crash spontaneously shortly after, you'll want to reinstall macOS fresh without importing any data at first.")]),e._v(" "),t("ul",[t("li",[e._v("Note that this bug affects native Macs as well and is not due to issues with unsupported Macs: "),t("a",{attrs:{href:"https://osxdaily.com/2021/11/10/volume-hash-mismatch-error-in-macos-monterey/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSX Daily: “Volume Hash Mismatch” Error in MacOS Monterey"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("Additionally, it can help to disable FeatureUnlock in Settings -> Misc Settings as this tool can be strenuous on systems with weaker memory stability.")]),e._v(" "),t("h2",{attrs:{id:"cannot-disable-sip-in-recoveryos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cannot-disable-sip-in-recoveryos"}},[e._v("#")]),e._v(" Cannot Disable SIP in recoveryOS")]),e._v(" "),t("p",[e._v("With OCLP, the patcher will always overwrite the current SIP value on boot to ensure that users don't brick an installation after an NVRAM reset. However, for users wanting to disable SIP entirely, this can be done easily.")]),e._v(" "),t("p",[e._v("Head into the GUI, go to Patcher Settings, and toggle the bits you need disabled from SIP:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("SIP Enabled")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("SIP Lowered (Root Patching)")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("SIP Disabled")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(283),alt:""}})]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(284),alt:""}})]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(285),alt:""}})])])])]),e._v(" "),t("h2",{attrs:{id:"intermediate-issues-with-usb-1-1-and-bluetooth-on-macpro3-1-macpro5-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#intermediate-issues-with-usb-1-1-and-bluetooth-on-macpro3-1-macpro5-1"}},[e._v("#")]),e._v(" Intermediate issues with USB 1.1 and Bluetooth on MacPro3,1 - MacPro5,1")]),e._v(" "),t("p",[e._v("For those experiencing issues with USB 1.1 devices (such as mice, keyboards and bluetooth chipsets), macOS Big Sur and newer have weakened OS-side reliability for the UHCI controller in older Mac Pros.")]),e._v(" "),t("ul",[t("li",[e._v("UHCI is a USB 1.1 controller that is hooked together with the USB 2.0 ports in your system. Whenever a USB 1.1 device is detected, the UHCI controller is given ownership of the device at a hardware/firmware level.\n"),t("ul",[t("li",[e._v("EHCI is the USB 2.0 controller in older Mac Pros")])])])]),e._v(" "),t("p",[e._v("Because of this, we recommend placing a USB 2.0/3.0 hub between your devices and the port on the Mac Pro. UHCI and EHCI cannot both be used at once, so using a USB hub will always force the EHCI controller on.")]),e._v(" "),t("ul",[t("li",[e._v("Alternatively, you can try cold-starting the hardware and see if macOS recognizes the UHCI controller properly.")])]),e._v(" "),t("h2",{attrs:{id:"stuck-on-less-than-a-minute-remaining"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-less-than-a-minute-remaining"}},[e._v("#")]),e._v(' Stuck on "Less than a minute remaining..."')]),e._v(" "),t("p",[e._v('A common area for systems to get "stuck", namely for units that are missing the '),t("code",[e._v("AES")]),e._v(" CPU instruction/older mobile hardware. During this stage, a lot of heavy cryptography is performed, which can make systems appear to be stuck. In reality they are working quite hard to finish up the installation.")]),e._v(" "),t("p",[e._v("Because this step can take a few hours or more depending on drive speeds, be patient at this stage and do not manually power off or reboot your machine as this will break the installation and require you to reinstall. If you think your system has stalled, press the Caps Lock key. If the light turns on, your system is busy and not actually frozen.")]),e._v(" "),t("h2",{attrs:{id:"no-acceleration-after-a-metal-gpu-swap-on-mac-pro"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#no-acceleration-after-a-metal-gpu-swap-on-mac-pro"}},[e._v("#")]),e._v(" No acceleration after a Metal GPU swap on Mac Pro")]),e._v(" "),t("p",[e._v("If you finished installing Monterey with the original card installed (to see bootpicker for example) and swapped your GPU to a Metal supported one, you may notice that you're missing acceleration. To fix this, open OCLP and revert root patches to get your Metal-supported GPU work again.")]),e._v(" "),t("p",[e._v('Alternatively, you can remove "AutoPkg-Assets.pkg" from /Library/Packages on the USB drive before proceeding with the installation. To see the folder, enable hidden files with '),t("code",[e._v("Command")]),e._v(" + "),t("code",[e._v("Shift")]),e._v(" + "),t("code",[e._v(".")])]),e._v(" "),t("p",[e._v("The reason for this is that the autopatcher will assume that you will be using the original graphics card and therefore does non-metal patching, which includes removing some drivers for other cards. This causes Metal cards to not accelerate after swapping.")]),e._v(" "),t("h2",{attrs:{id:"keyboard-mouse-and-trackpad-not-working-in-installer-or-after-update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyboard-mouse-and-trackpad-not-working-in-installer-or-after-update"}},[e._v("#")]),e._v(" Keyboard, Mouse and Trackpad not working in installer or after update")]),e._v(" "),t("p",[e._v("For Macs using legacy USB 1.1 controllers, OpenCore Legacy Patcher can only restore support once it has performed root volume patches. Thus to install macOS, you need to hook up a USB hub between your Mac and Keyboard/Mouse.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("In macOS Sonoma, this seems to have been further weakened and some hubs may not be functional.")]),e._v(" "),t("p",[e._v('Alternative way is making sure to enable "Remote Login" in General -> Sharing before updating, which will enable SSH. That means you can take control using Terminal in another system by typing '),t("code",[e._v("ssh username@lan-ip-address")]),e._v(" and your password. After that run Post Install Volume Patching by typing "),t("code",[e._v("/Applications/OpenCore-Patcher.app/Contents/MacOS/OpenCore-Patcher --patch-sys-vol")]),e._v(" and finally "),t("code",[e._v("sudo reboot")]),e._v(".")])]),e._v(" "),t("ul",[t("li",[e._v("For MacBook users, you'll need to find an external keyboard/mouse in addition to the USB hub")])]),e._v(" "),t("p",[e._v("More information can be found here:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/dortania/OpenCore-Legacy-Patcher/issues/1021",target:"_blank",rel:"noopener noreferrer"}},[e._v("Legacy UHCI/OHCI support in Ventura #1021"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("Applicable models include:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Family")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Year")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Model")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Notes")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("MacBook")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Mid 2010 and older")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("MacBook5,1 - MacBook7,1")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}})]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("MacBook Air")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Late 2010 and older")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("MacBookAir2,1 - MacBookAir3,x")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}})]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("MacBook Pro")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Mid 2010 and older")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("MacBookPro4,1 - MacBookPro7,x")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v('Excludes Mid 2010 15" and 17" (MacBookPro6,x)')])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("iMac")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Late 2009 and older")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("iMac7,1 - iMac10,x")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v('Excludes Core i5/7 27" late 2009 iMac (iMac11,1)')])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Mac mini")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Mid 2011 and older")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Macmini3,1 - Macmini5,x")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}})]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Mac Pro")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Mid 2010 and older")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("MacPro3,1 - MacPro5,1")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}})])])]),e._v(" "),t("p",[t("img",{attrs:{src:a(259),alt:""}})]),e._v(" "),t("h2",{attrs:{id:"no-t1-functionality-after-installing-sonoma-or-newer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#no-t1-functionality-after-installing-sonoma-or-newer"}},[e._v("#")]),e._v(" No T1 functionality after installing Sonoma or newer")]),e._v(" "),t("p",[e._v("If you notice your Touchbar etc not working, this means loss of T1 functionality.")]),e._v(" "),t("p",[e._v("Wiping the entire disk using Disk Utility with Sonoma or newer causes the T1 firmware to be removed, which due to removed support, the macOS Sonoma+ installer will not restore. When installing Sonoma or newer, only wipe the volume containing the operating system e.g. Macintosh HD or whichever name you have given it, shown in the image below.")]),e._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:a(358),alt:"WipeVolume",width:"400"}})]),e._v(" "),t("p",[e._v("To restore T1 functionality, Ventura or older has to be reinstalled. This can be done in another volume or external disk as well, as long as the OS is booted once. After this you can wipe the old OS or unplug the external disk.")])])}),[],!1,null,null,null);t.default=r.exports}}]);