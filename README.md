# 🌐 Enterprise Intranet Web Server Using Cisco Packet Tracer

## 📌 Project Overview

This project demonstrates the design and implementation of a small enterprise network with a centralized intranet web server using Cisco Packet Tracer.

The network is segmented into multiple VLANs representing different departments within an organization. Inter-VLAN communication is achieved through Router-on-a-Stick configuration, allowing users from different departments to access shared resources hosted on the company's web server.

The project simulates a real-world enterprise environment and focuses on network segmentation, routing, and web server deployment.




# 🏢 Scenario

TechSolutions Ltd requires a secure and scalable network infrastructure for its departments:

* Sales Department
* Human Resources Department
* IT Department

A centralized web server hosts the company's intranet website, which must be accessible from all departments.



# 🎯 Objectives

* Implement VLAN segmentation.
* Configure trunk links between switches.
* Configure Router-on-a-Stick for Inter-VLAN routing.
* Deploy and configure a web server.
* Enable communication between all VLANs.
* Allow users to access the company intranet through a web browser.



# 🛠 Technologies Used

| Technology          | Purpose                |
| ------------------- | ---------------------- |
| Cisco Packet Tracer | Network Simulation     |
| Cisco IOS           | Device Configuration   |
| VLANs               | Network Segmentation   |
| Router-on-a-Stick   | Inter-VLAN Routing     |
| IPv4 Addressing     | Network Communication  |
| HTTP Service        | Web Hosting            |
| Trunk Links         | VLAN Traffic Transport |



# 🖥 Network Topology

The network consists of:

* 1 Router
* 2 Switches
* 6 PCs
* 1 Web Server

Departmental VLANs:

| VLAN ID | Department      | Network Address |
| ------- | --------------- | --------------- |
| VLAN 10 | Sales           | 192.168.10.0/24 |
| VLAN 20 | Human Resources | 192.168.20.0/24 |
| VLAN 30 | IT Department   | 192.168.30.0/24 |
| VLAN 99 | Server Network  | 192.168.99.0/24 |



# 🌍 IP Addressing Scheme

## Sales Department

| Device  | IP Address    |
| ------- | ------------- |
| PC0     | 192.168.10.10 |
| PC1     | 192.168.10.11 |
| Gateway | 192.168.10.1  |



## Human Resources

| Device  | IP Address    |
| ------- | ------------- |
| PC2     | 192.168.20.10 |
| PC3     | 192.168.20.11 |
| Gateway | 192.168.20.1  |



## IT Department

| Device  | IP Address    |
| ------- | ------------- |
| PC4     | 192.168.30.10 |
| PC5     | 192.168.30.11 |
| Gateway | 192.168.30.1  |



## Web Server

| Device  | IP Address    |
| ------- | ------------- |
| Server  | 192.168.99.10 |
| Gateway | 192.168.99.1  |



# ⚙ Features Implemented

✅ VLAN Creation and Configuration

✅ Port Assignment

✅ Trunk Port Configuration

✅ Router-on-a-Stick Configuration

✅ Inter-VLAN Communication

✅ Static IP Addressing

✅ HTTP Service Configuration

✅ Web Browser Access

✅ End-to-End Connectivity Testing



# 🔧 Router-on-a-Stick Configuration

Each VLAN is assigned a dedicated subinterface:

```bash
interface g0/0.10
encapsulation dot1Q 10
ip address 192.168.10.1 255.255.255.0

interface g0/0.20
encapsulation dot1Q 20
ip address 192.168.20.1 255.255.255.0

interface g0/0.30
encapsulation dot1Q 30
ip address 192.168.30.1 255.255.255.0

interface g0/0.99
encapsulation dot1Q 99
ip address 192.168.99.1 255.255.255.0
```



# 🌐 Web Server Configuration

HTTP service was enabled on the server and a custom intranet webpage was created.

Users from all VLANs can access:

```
http://192.168.99.10
```

through their web browsers.


# 🧪 Verification and Testing

The following tests were performed successfully:

| Test                     | Status       |
| ------------------------ | ------------ |
| Same VLAN Communication  | ✅ Successful |
| Inter-VLAN Communication | ✅ Successful |
| Router Connectivity      | ✅ Successful |
| Server Reachability      | ✅ Successful |
| HTTP Access              | ✅ Successful |
| Browser Access           | ✅ Successful |



# 📷 Screenshots

## 1. Complete Network Topology

> Insert screenshot:

```
screenshots/topology.png
```


## 2. VLAN Configuration

Command:

```bash
show vlan brief
```

> Insert screenshot:

```
screenshots/vlan-config.png
```



## 3. Trunk Configuration

Command:

```bash
show interfaces trunk
```

> Insert screenshot:

```
screenshots/trunk-config.png
```



## 4. Router Subinterfaces

Command:

```bash
show ip interface brief
```

> Insert screenshot:

```
screenshots/router-config.png
```



## 5. HTTP Server Configuration

> Insert screenshot:

```
screenshots/http-server.png
```



## 6. Web Browser Access

> Insert screenshot:

```
screenshots/browser-access.png
```



## 7. Successful Ping Tests

> Insert screenshot:

```
screenshots/ping-results.png
```



# 📁 Repository Structure

```text
enterprise-intranet-web-server/
│
├── enterprise-webserver.pkt
├── README.md
│
├── screenshots/
│   ├── topology.png
│   ├── vlan-config.png
│   ├── trunk-config.png
│   ├── router-config.png
│   ├── http-server.png
│   ├── browser-access.png
│   └── ping-results.png
```



# 📚 Networking Concepts Demonstrated

This project demonstrates practical knowledge of:

* VLANs
* Inter-VLAN Routing
* Router-on-a-Stick
* Trunking
* Static IP Addressing
* Web Server Deployment
* HTTP Services
* Enterprise Network Design
* Cisco IOS Configuration
* Network Troubleshooting



# 🎓 Learning Outcomes

Through this project, the following networking skills were strengthened:

* Network Design
* VLAN Implementation
* Router Configuration
* Server Deployment
* Cisco IOS CLI
* Troubleshooting
* Enterprise Network Documentation


# 👨‍💻 Author

## Name: Amara Yaqub.K.Sesay
## Email: amarasesay288@gmail.com


Computer Science Student and  Networking Enthusiast



# ⭐ Project Purpose

This repository is part of my networking portfolio and serves as a practical demonstration of enterprise LAN design, Inter-VLAN routing, and web server deployment using Cisco Packet Tracer.



## If you found this project helpful, consider giving the repository a ⭐.
