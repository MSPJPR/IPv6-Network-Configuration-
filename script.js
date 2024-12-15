// Validate IPv6 Address
function validateIPv6() {
    const ipv6Input = document.getElementById('ipv6-input').value;
    const ipv6Pattern = /^([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}$/;
    const result = document.getElementById('validation-result');

    if (ipv6Pattern.test(ipv6Input)) {
        result.textContent = 'Valid IPv6 Address!';
        result.style.color = 'green';
        drawIPv6Diagram(ipv6Input);
    } else {
        result.textContent = 'Invalid IPv6 Address. Please try again.';
        result.style.color = 'red';
    }
}

// Draw IPv6 Diagram using D3.js
function drawIPv6Diagram(address) {
    const svg = d3.select("#ipv6-diagram").html("").append("svg")
        .attr("width", "100%")
        .attr("height", 200);

    svg.append("text")
        .attr("x", 20)
        .attr("y", 100)
        .attr("font-size", "20px")
        .text(`IPv6 Address: ${address}`);
}

// Simulate IPv6 Packet Transmission
function simulateTransmission() {
    const animation = document.getElementById('network-animation');
    animation.innerHTML = '<div id="packet" style="width: 20px; height: 20px; background: red; position: absolute; top: 40px; left: 0;"></div>';
    
    const packet = document.getElementById('packet');
    let pos = 0;
    const interval = setInterval(() => {
        if (pos >= 580) {
            clearInterval(interval);
        } else {
            pos += 5;
            packet.style.left = pos + 'px';
        }
    }, 50);
}

// Display IPv6 Security Demo
function showSecurityDemo() {
    const demo = document.getElementById('security-demo');
    demo.textContent = 'Demonstrating IP Authentication Header (AH) and Encapsulation Security Payload (ESP)...';
}

// Congestion Control Visualization using Chart.js
let congestionChart;
function updateCongestionChart() {
    const ctx = document.getElementById('congestionChart').getContext('2d');
    
    if (congestionChart) {
        congestionChart.destroy();
    }

    congestionChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['0s', '1s', '2s', '3s', '4s', '5s'],
            datasets: [{
                label: 'Queue Length',
                data: [0, 2, 4, 8, 16, 32],
                borderColor: 'blue',
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
