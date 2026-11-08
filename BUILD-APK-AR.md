# بناء الـ APK بدون Android Studio (عن طريق GitHub)

1. أنشئي حساب مجاني على github.com ثم New repository (اسمه مثلًا installments).
2. ارفعي كل محتويات هذا المجلد (android و desktop و .github) للمستودع: Add file ثم Upload files. تأكدي إن مجلد `.github` اترفع (لو مخفي، اسحبي المجلد كله).
3. افتحي تبويب Actions ثم Build APK ثم Run workflow.
4. بعد حوالي 5 إلى 8 دقائق افتحي التشغيل الناجح، ونزّلي من Artifacts الملف installments-apk (zip فيه app-debug.apk).
5. انقلي الـ APK للتليفون وثبّتيه (فعّلي التثبيت من مصادر غير معروفة).
