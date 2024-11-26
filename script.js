// const ipAddressElement = document.getElementById('ip-address');

// async function getIpAddress() {
//     try {
//         const response = await fetch('https://api64.ipify.org?format=json');
//         const data = await response.json();
//         ipAddressElement.textContent = data.ip;
//     } catch (error) {
//         console.error('Error fetching IP address:', error);
//         ipAddressElement.textContent = 'Error fetching IP address';
//     }
// }

// getIpAddress();

// // Function to fetch and display the IP address
// function fetchIPAddress() {
//     fetch('https://api64.ipify.org?format=json')
//         .then(response => response.json())
//         .then(data => {
//             document.getElementById('ipAddress').textContent = data.ip;
//         })
//         .catch(error => {
//             console.error('Error fetching IP address:', error);
//             document.getElementById('ipAddress').textContent = 'Error';
//         });
// }

// // Function to copy the IP address to the clipboard
// function copyIP() {
//     var ipAddress = document.getElementById('ipAddress').textContent;
//     var textArea = document.createElement('textarea');
//     textArea.value = ipAddress;
//     document.body.appendChild(textArea);
//     textArea.select();
//     document.execCommand('copy');
//     document.body.removeChild(textArea);
//     alert('IP address copied to clipboard: ' + ipAddress);
// }

// // Call the fetchIPAddress function when the page loads
// fetchIPAddress();

// // Add a click event listener to the "Copy" button
// document.getElementById('copyButton').addEventListener('click', copyIP);

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ipAddress').textContent = data.ip;
        })
        .catch(error => {
            document.getElementById('ipAddress').textContent = 'Error fetching IP';
        });

    document.getElementById('copyButton').addEventListener('click', () => {
        const ipAddress = document.getElementById('ipAddress').textContent;
        navigator.clipboard.writeText(ipAddress).then(() => {
            alert('IP address copied to clipboard: ' + ipAddress);
        });
    });
});
