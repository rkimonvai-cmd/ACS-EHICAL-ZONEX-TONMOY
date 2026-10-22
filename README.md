# ⚡ ACS TONMOY STUDIO (Next.js 14 + Upstash Redis)

প্রিমিয়াম সাইবারপাঙ্ক ডিজাইন সমৃদ্ধ পাসওয়ার্ড সিকিউরড অনলাইন ভিডিও আর্কাইভ এবং ম্যানেজমেন্ট সিস্টেম।

## 🚀 বৈশিষ্ট্যসমূহ (Features)
- 🎬 **গুগল ড্রাইভ ভিডিও প্লেয়ার**: সিকিউর সার্ভার-সাইড পাসওয়ার্ড ভেরিফিকেশনের মাধ্যমে স্ট্রিম প্রকাশ।
- 🔐 **এডমিন প্যানেল (`/admin`)**: লেকচার অ্যাড, সিকিউর ডিলিট এবং ভিডিও ম্যানেজমেন্ট।
- 🛡️ **সম্পূর্ণ নিরাপদ (Zero Secret Leaks)**: পাসওয়ার্ড বা হ্যাশ সার্ভার ছাড়া কখনোই ব্রাউজারে আসে না।
- ⚡ **Upstash Redis**: ক্লাউড ডেটাবেজে স্থায়ী ডেটা স্টোরেজ।
- 📱 **সাইবারপাঙ্ক রেসপন্সিভ ডিজাইন**: মোবাইল ও ডেস্কটপ উভয়েই সাবলীল পারফর্মেন্স।

## 🛠️ সেটআপ নির্দেশিকা (Bengali Deployment Guide)

### ১. লোকাল সেটআপ:
```bash
git clone https://github.com/your-username/acs-tonmoy-studio.git
cd acs-tonmoy-studio
npm install
cp .env.example .env.local
npm run dev
```

### ২. Upstash Redis সেটআপ:
1. [Upstash Console](https://console.upstash.com)-এ সাইন আপ করে একটি নতুন **Redis Database** তৈরি করুন।
2. REST API সেকশন থেকে `UPSTASH_REDIS_REST_URL` এবং `UPSTASH_REDIS_REST_TOKEN` কপি করুন।

### ৩. Vercel-এ ডিপ্লয়মেন্ট:
1. কোড GitHub-এ পুশ করুন।
2. Vercel-এ ইম্পোর্ট করে Environment Variables বক্সে নিচে উল্লেখিত ৫টি ভ্যারিয়েবল যুক্ত করুন:
   - `ADMIN_USERNAME`
   - `ADMIN_PASSWORD`
   - `SESSION_SECRET`
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
3. **Deploy** বাটনে ক্লিক করুন!
