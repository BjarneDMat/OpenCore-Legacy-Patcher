(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{315:function(e,t,o){e.exports=o.p+"assets/img/efi-boot.8307f610.png"},316:function(e,t,o){e.exports=o.p+"assets/img/Unflashed-Boot-1.ba0e58a4.png"},317:function(e,t,o){e.exports=o.p+"assets/img/Unflashed-Boot-2.5e873f39.png"},318:function(e,t,o){e.exports=o.p+"assets/img/Unflashed-Boot-3.79f71d03.png"},319:function(e,t,o){e.exports=o.p+"assets/img/oc-boot.3c2bdab5.png"},320:function(e,t,o){e.exports=o.p+"assets/img/oclp-stuck-firstreboot.12edd7b4.png"},392:function(e,t,o){"use strict";o.r(t);var s=o(10),a=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"booting-opencore-and-macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#booting-opencore-and-macos"}},[e._v("#")]),e._v(" Booting OpenCore and macOS")]),e._v(" "),t("p",[e._v("Now we finally get to boot OpenCore!")]),e._v(" "),t("p",[e._v("Reboot the machine while holding "),t("code",[e._v("Option")]),e._v(" to select the EFI Boot entry with the OpenCore icon (holding the "),t("code",[e._v("Control")]),e._v(" key will make this the default boot entry):")]),e._v(" "),t("ul",[t("li",[e._v("This will be the Mac Boot Picker")])]),e._v(" "),t("p",[t("img",{attrs:{src:o(315),alt:""}})]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("Note for Mac Pros/Xserves/iMacs with unflashed GPUs")]),e._v(" "),t("p",[e._v("(Adapted from the "),t("a",{attrs:{href:"https://forums.macrumors.com/threads/opencore-on-the-mac-pro.2207814/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCore on the Mac Pro guide"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("p",[e._v("For Mac Pro, Xserve and, iMac users with non-flashed GPUs, you can still easily boot OpenCore and view the entire boot process.")]),e._v(" "),t("p",[e._v("Firstly, open the Terminal and run the following command:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" nvram "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"recovery-boot-mode=unused"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("reboot")]),e._v(" recovery\n")])])]),t("p",[e._v("This will make your machine reboot into the Recovery Environment. Alternatively, holding "),t("code",[e._v("Command")]),e._v(" + "),t("code",[e._v("R")]),e._v(" when your machine is starting up will also let you enter the Recovery.")]),e._v(" "),t("p",[e._v("Secondly, open the Recovery Environment's Terminal (Menu bar > Utilities > Terminal).")]),e._v(" "),t("p",[e._v("Now you'll want to get a list of drive identifiers. To do so, run the following command:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("diskutil list\n")])])]),t("p",[e._v("The command should produce a list of drives installed in your system:\n"),t("img",{attrs:{src:o(316),alt:""}})]),e._v(" "),t("p",[e._v("Keep track of the drive with the OCLP install. You will need the drive identifer for later.")]),e._v(" "),t("p",[e._v("Now you'll want to mount the EFI partition (where OCLP is installed, though it may differ if you've installed OCLP to a FAT-32 volume).")]),e._v(" "),t("p",[e._v("Run the following command (Replace X with the drive number):")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("diskutil "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mount")]),e._v(" diskXs1\n")])])]),t("p",[t("img",{attrs:{src:o(317),alt:""}}),e._v("\nIf everything is correct, the EFI partion should be mounted.")]),e._v(" "),t("p",[e._v("Now you'll want to use the "),t("code",[e._v("bless")]),e._v(" command to set the default boot device:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("bless "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--mount")]),e._v(" /Volumes/EFI "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--setBoot")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--file")]),e._v(" /Volumes/EFI/System/Library/CoreServices/boot.efi\n")])])]),t("p",[e._v("Once the command is run, it should produce no output.\n"),t("img",{attrs:{src:o(318),alt:""}})]),e._v(" "),t("p",[e._v("If the command produces an output, ensure that you've typed it in correctly.")]),e._v(" "),t("p",[e._v("Now you can reboot your machine. OCLP is now the default boot option!")])]),e._v(" "),t("p",[e._v('Now that you\'ve loaded OpenCore, "select Install macOS":')]),e._v(" "),t("ul",[t("li",[e._v("This will be the OpenCore Picker")])]),e._v(" "),t("p",[t("img",{attrs:{src:o(319),alt:""}})]),e._v(" "),t("p",[e._v("You will soon reach the installer screen! If you enabled verbose mode when building OCLP, a lot of text will run across the screen. From there, it's just like any normal macOS install. For an example of how the boot process looks, see the following video:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=AN3zsbQV_n4",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCore Legacy Patcher Boot Process"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("If your Mac is looping back into the beginning of the setup after the first reboot, turn it off, start it again and hold "),t("code",[e._v("Option")]),e._v('. This time, select the option with a grey hard disk icon, it can say "macOS Installer" or the name you gave the disk during the installer process. Keep repeating this step after every reboot if necessary.')]),e._v(" "),t("p",[t("img",{attrs:{src:o(320),alt:""}})]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[t("strong",[e._v("MacBookPro11,3 Note")]),e._v(": When booting macOS Monterey, you'll need to boot into safe mode if acceleration patches are not installed yet. "),t("a",{attrs:{href:"https://github.com/dortania/OpenCore-Legacy-Patcher/issues/522",target:"_blank",rel:"noopener noreferrer"}},[e._v("Otherwise, you'll hit a black screen due to missing NVIDIA drivers."),t("OutboundLink")],1),e._v(" Safe Mode can be entered by holding "),t("code",[e._v("Shift + Enter")]),e._v(" when selecting macOS Monterey in OCLP's Boot Menu.")])]),e._v(" "),t("h1",{attrs:{id:"once-installed-and-booting-head-to-post-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#once-installed-and-booting-head-to-post-installation"}},[e._v("#")]),e._v(" Once installed and booting, head to "),t("RouterLink",{attrs:{to:"/POST-INSTALL.html"}},[e._v("Post-Installation")])],1)])}),[],!1,null,null,null);t.default=a.exports}}]);