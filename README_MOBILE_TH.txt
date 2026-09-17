MY PERIOD — อัปโหลดบน GitHub จากมือถือแบบไฟล์ล้วน

อัปโหลดไฟล์ทั้งหมดในชุดนี้ไว้ที่หน้าแรกของ Repository:
index.html
native-notifications.js
icon-192.png
icon-512.png
manifest.webmanifest
sw.js
capacitor.config.ts
package.json
vite.config.js

ไม่ต้องสร้างโฟลเดอร์ public หรือ app

หลังอัปโหลด ให้เข้า GitHub > Actions > New workflow > set up a workflow yourself
แล้วสร้างไฟล์ .github/workflows/build-apk.yml โดยใช้เนื้อหาในไฟล์ BUILD_WORKFLOW.txt
จากนั้นกด Commit changes และรอ Build
