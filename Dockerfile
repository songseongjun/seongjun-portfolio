# 1️⃣ Builder stage
FROM node:20-alpine AS builder

WORKDIR /app

# 패키지 설치
COPY package.json package-lock.json* ./
RUN npm ci

# 소스 복사
COPY . .

# Next.js 빌드
RUN npm run build


# 2️⃣ Runner stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# 필요 파일만 복사
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000

CMD ["npm", "run", "start"]
