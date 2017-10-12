#!/bin/bash
source /home/ec2-user/.bash_profile

cd /webapp
pm2 stop all
npm install
