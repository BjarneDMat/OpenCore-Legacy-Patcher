(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{283:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-Settings-SIP-Enabled.f95aadf0.png"},284:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-Settings-SIP-Root-Patch.b983af09.png"},285:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-Settings-SIP-Disabled.960a27d1.png"},348:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-Settings-ShowPicker.5831a6a8.png"},349:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-root-patch-update.2ede4894.png"},350:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-Root-Patch-Status.88367958.png"},351:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-Root-Patch.8759192a.png"},352:function(t,e,a){t.exports=a.p+"assets/img/OCLP-GUI-Root-Patch-Finished.ce27b410.png"},404:function(t,e,a){"use strict";a.r(e);var s=a(10),i=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"post-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#post-installation"}},[t._v("#")]),t._v(" Post-Installation")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#booting-without-usb-drive"}},[t._v("Booting without USB drive")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#booting-seamlessly-without-boot-picker"}},[t._v("Booting seamlessly without Boot Picker")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#applying-post-install-volume-patches"}},[t._v("Applying Post Install Volume Patches")])])]),t._v(" "),e("h2",{attrs:{id:"booting-without-usb-drive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#booting-without-usb-drive"}},[t._v("#")]),t._v(" Booting without USB drive")]),t._v(" "),e("p",[t._v("Once you've installed macOS through OpenCore, you can boot up and go through the regular install process. To boot without the USB drive plugged in is quite simple:")]),t._v(" "),e("ul",[e("li",[t._v("Download OpenCore Legacy Patcher")]),t._v(" "),e("li",[t._v("Change Patcher settings as you'd like")]),t._v(" "),e("li",[t._v("Build OpenCore again")]),t._v(" "),e("li",[t._v("Install OpenCore to internal drive")]),t._v(" "),e("li",[t._v("Reboot holding Option, and select the internal EFI")])]),t._v(" "),e("p",[t._v("And voila! No more USB drive required.")]),t._v(" "),e("h2",{attrs:{id:"booting-seamlessly-without-boot-picker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#booting-seamlessly-without-boot-picker"}},[t._v("#")]),t._v(" Booting seamlessly without Boot Picker")]),t._v(" "),e("p",[t._v('To do this, run the OpenCore Patcher and head to Patcher Settings, then uncheck "Show OpenCore Bootpicker" on the Build tab:')]),t._v(" "),e("p",[e("img",{attrs:{src:a(348),alt:""}})]),t._v(" "),e("p",[t._v('Once you\'ve toggled it off, build your OpenCore EFI once again and install to your desired drive. Now to show the OpenCore selector, you can simply hold down the "ESC" key while clicking on EFI boot, and then you can release the "ESC" key when you see the cursor arrow at the top left.')]),t._v(" "),e("h2",{attrs:{id:"enabling-sip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enabling-sip"}},[t._v("#")]),t._v(" Enabling SIP")]),t._v(" "),e("p",[t._v("For many users, SIP will be lowered by default on build. For Intel HD 4000 users, you may have noticed that SIP is partially disabled. This is to ensure full compatibility with macOS Monterey and allow seamless booting between it and older OSes. However for users who do not plan to boot Monterey, you can re-enable under Patcher Settings.")]),t._v(" "),e("p",[t._v("Note: Machines running macOS Ventura or systems with non-Metal GPUs cannot enable SIP outright, due to having a patched root volume. Enabling it will brick the installation.")]),t._v(" "),e("p",[t._v("Going forward with 0.6.6, SIP settings can be accessed from the Security tab shown in the images.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("SIP Enabled")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("SIP Lowered (Root Patching)")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("SIP Disabled")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(283),alt:""}})]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(284),alt:""}})]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(285),alt:""}})])])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("If you're unsure whether you should enable SIP, leave it as-is. Systems where you have already ran the Post Install Root Patching cannot enable SIP without potentially breaking the current install.")])]),t._v(" "),e("h2",{attrs:{id:"applying-post-install-volume-patches"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#applying-post-install-volume-patches"}},[t._v("#")]),t._v(" Applying Post Install Volume Patches")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("If you need to use Migration Assistant to bring over data to your new macOS install, it is "),e("strong",[t._v("highly recommended")]),t._v(" to avoid restoring from inside Setup Assistant and waiting to install root patches until after the transfer is complete. If root patches were automatically installed, you can use the options available in the OCLP app to remove them.")]),t._v(" "),e("p",[t._v("Using Migration Assistant while patches are installed can lead to an unbootable system, requiring a reinstall of macOS.")])]),t._v(" "),e("p",[t._v("Post Install Volume Patches, sometimes also called root patches, are patches that have to be installed to disk for some older Macs to gain back functionality.")]),t._v(" "),e("p",[t._v("OCLP will automatically root patch your system during a first time install "),e("strong",[t._v("if the USB install media was created within OCLP.")]),t._v(" Users will also be prompted to install these patches after macOS updates or whenever patches are not detected on the system. We recommend rebuilding OpenCore with the latest version of OCLP to take advantage of these new features.")]),t._v(" "),e("p",[t._v("Users can also see whether applicable patches have been installed, date and version the system was root patched with in the Post-Install Menu.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Automatic install prompt")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Status")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(349),alt:""}})]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(350),alt:""}})])])])]),t._v(" "),e("h3",{attrs:{id:"running-post-install-patches-manually"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-post-install-patches-manually"}},[t._v("#")]),t._v(" Running Post Install patches manually")]),t._v(" "),e("p",[t._v("If you're using OCLP v0.4.3 or earlier, or need to run the patcher manually, you can do so with the app. There is no harm in trying to run the Patcher, as without compatible hardware, nothing will be done. You can see below on whether your hardware needs root volume patching or not.")]),t._v(" "),e("p",[t._v("There is also an option to remove root patches, which may be required in some situations, such as switching GPUs in Mac Pros or using Migration Assistant.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Listing Patches")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Patching Finished")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(351),alt:""}})]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:a(352),alt:""}})])])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("With macOS Ventura and Macs with AMD Legacy GCN GPUs (ie. Metal), Root Patching requires a network connection to grab Apple's Kernel Debug Kit to start root patching. If your system is unable to connect to the internet, you can manually download a KDK from Apple's site:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developer.apple.com/download/all/?q=Kernel%20Debug%20Kit",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apple's Developer Download Page"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("Grab the Kernel Debug Kit whose version is closest to the OS you installed, and install it to the machine running Ventura.")]),t._v(" "),e("p",[t._v("Machines that require this are those with AMD Metal dGPUs:")]),t._v(" "),e("ul",[e("li",[t._v("2008 - 2013 Mac Pros (MacPro3,1 - 6,1)")]),t._v(" "),e("li",[t._v("2009 - 2016 iMacs (iMac10,1 - 17,1)")]),t._v(" "),e("li",[t._v('2015 15" MacBook Pro with a dGPU (MacBookPro11,5)')])])]),t._v(" "),e("p",[t._v("Below entries represent GPUs no longer natively supported, ie. requiring root volume patching with OpenCore Legacy Patcher:")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("GPUs requiring patching in macOS Big Sur")]),t._v(" "),e("ul",[e("li",[t._v("NVIDIA:\n"),e("ul",[e("li",[t._v("Tesla (8000 - 300 series)")])])]),t._v(" "),e("li",[t._v("AMD:\n"),e("ul",[e("li",[t._v("TeraScale (2000 - 6000 series)")])])]),t._v(" "),e("li",[t._v("Intel:\n"),e("ul",[e("li",[t._v("Iron Lake")]),t._v(" "),e("li",[t._v("Sandy Bridge (2000 - 3000 series)")])])])])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("GPUs requiring patching in macOS Monterey")]),t._v(" "),e("ul",[e("li",[t._v("NVIDIA:\n"),e("ul",[e("li",[t._v("Tesla (8000 - 300 series)")]),t._v(" "),e("li",[t._v("Kepler (600 - 800 series)")])])]),t._v(" "),e("li",[t._v("AMD:\n"),e("ul",[e("li",[t._v("TeraScale (2000 - 6000 series)")])])]),t._v(" "),e("li",[t._v("Intel:\n"),e("ul",[e("li",[t._v("Iron Lake")]),t._v(" "),e("li",[t._v("Sandy Bridge (2000 - 3000 series)")]),t._v(" "),e("li",[t._v("Ivy Bridge (4000 series)")])])])])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Wireless Cards requiring patching in macOS Monterey")]),t._v(" "),e("ul",[e("li",[t._v("Broadcom:\n"),e("ul",[e("li",[t._v("BCM94328")]),t._v(" "),e("li",[t._v("BCM94322")])])]),t._v(" "),e("li",[t._v("Atheros")])])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("GPUs requiring patching in macOS Ventura")]),t._v(" "),e("ul",[e("li",[t._v("NVIDIA:\n"),e("ul",[e("li",[t._v("Kepler (600 - 800 series)")])])]),t._v(" "),e("li",[t._v("AMD:\n"),e("ul",[e("li",[t._v("GCN 1-3 (7000 - R9 series)")]),t._v(" "),e("li",[t._v("Polaris (RX 4xx/5xx series, if CPU lacks AVX2)")])])]),t._v(" "),e("li",[t._v("Intel:\n"),e("ul",[e("li",[t._v("Ivy Bridge (4000 series)")]),t._v(" "),e("li",[t._v("Haswell (4400, 4600, 5000 series)")]),t._v(" "),e("li",[t._v("Broadwell (6000 series)")]),t._v(" "),e("li",[t._v("Skylake (500 series)")])])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);