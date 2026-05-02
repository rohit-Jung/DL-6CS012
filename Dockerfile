FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    python3 python3-pip python3-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace
COPY requirements.txt .

RUN pip3 install --break-system-packages --no-cache-dir \
    tensorflow[and-cuda] \
    -r requirements.txt

RUN find /usr/local/lib/python3.12/dist-packages/nvidia -name "lib" -type d \
    > /etc/ld.so.conf.d/nvidia-tf.conf && ldconfig

EXPOSE 8888
