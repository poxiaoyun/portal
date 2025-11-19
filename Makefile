.PHONY: help install dev build start lint docker-build docker-run docker-stop clean

PROJECT_NAME ?= poxiaoshi
IMAGE ?= $(PROJECT_NAME):latest
PORT ?= 3000

help:
	@echo "可用目标："
	@echo "  install        安装依赖 (pnpm install)"
	@echo "  dev            本地开发 (pnpm dev)"
	@echo "  build          生产构建 (pnpm build)"
	@echo "  start          启动生产包 (pnpm start)"
	@echo "  lint           运行 ESLint"
	@echo "  docker-build   构建 Docker 镜像"
	@echo "  docker-run     运行 Docker 容器"
	@echo "  docker-stop    停止 Docker 容器"
	@echo "  clean          清理依赖与构建产物"

install:
	pnpm install

dev:
	pnpm dev

build:
	pnpm build

start:
	pnpm start

lint:
	pnpm lint

docker-build:
	docker build -t $(IMAGE) .

docker-run:
	docker run -d -p $(PORT):80 --name $(PROJECT_NAME) $(IMAGE)

docker-stop:
	-docker stop $(PROJECT_NAME)
	-docker rm $(PROJECT_NAME)

clean:
	rm -rf node_modules .next out pnpm-lock.yaml

