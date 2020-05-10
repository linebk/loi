window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('languagefield').textContent = data.language;
    document.getElementById('viewtypefield').textContent = data.context.viewType;
    document.getElementById('useridfield').textContent = data.context.userId;
    document.getElementById('utouidfield').textContent = data.context.utouId;
    document.getElementById('roomidfield').textContent = data.context.roomId;
    document.getElementById('groupidfield').textContent = data.context.groupId;

    // openWindow call
    document.getElementById('openwindowbutton').addEventListener('click', function () {
        liff.openWindow({
            url: 'https://line.me'
        });
    });

    // closeWindow call
    document.getElementById('closewindowbutton').addEventListener('click', function () {
        liff.closeWindow();
    });

    // sendMessages call
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิงโพส1"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton2').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิงโพส2"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton3').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิงโพส3"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton4').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิงกลุ่ม1"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton5').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิงกลุ่ม2"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton6').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิงกลุ่ม3"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton7').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "/แม่แบบที่1"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton8').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "/แม่แบบที่2"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton9').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "/แม่แบบที่3"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton10').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิงเพื่อน"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton11').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ประกาศเพื่อน"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton12').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ประกาศขายพ3"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton13').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ขายสินค้า"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton14').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ประกาศกลุ่ม2"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton15').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ประกาศกลุ่ม3"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton16').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "/แม่แบบสไลที่1"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton17').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "/แม่แบบสไลที่2"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton18').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "/แม่แบบสไลที่3"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton19').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิงรูป1"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton20').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิงรูป2"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton21').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิงรูป3"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton22').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิงรูปกลุ่ม1"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton23').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิงรูปกลุ่ม2"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

     // sendMessages call
    document.getElementById('sendmessagebutton24').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิงรูปกลุ่ม3"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton25').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "/แม่แบบรูป1"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton26').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "/แม่แบบรูป2"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton27').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "/แม่แบบรูป3"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

     // sendMessages call
    document.getElementById('sendmessagebutton28').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิง01"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton29').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิง02"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton30').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิง03"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton31').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "สู้กลุ่ม01"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton32').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "สู้กลุ่ม02"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton33').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "สู้กลุ่ม03"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton34').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "/แม่แบบใหม่1"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton35').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "/แม่แบบใหม่2"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton36').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "/แม่แบบใหม่3"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton37').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิงรูปสไล1"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton38').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิงรูปสไล2"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton39').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิงรูปสไล3"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton40').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิงรูปกลุ่มสไล1"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });


    // sendMessages call
    document.getElementById('sendmessagebutton41').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิงรูปกลุ่มสไล2"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton42').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "ยิงรูปกลุ่มสไล3"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton43').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "/ยิงรูปสไล1"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

     // sendMessages call
    document.getElementById('sendmessagebutton44').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "/ยิงรูปสไล2"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });

    // sendMessages call
    document.getElementById('sendmessagebutton45').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "/ยิงรูปสไล3"
        
        }]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("ไม่สามารถส่งได้: " + error);
        });
    });



    // get access token
    document.getElementById('getaccesstoken').addEventListener('click', function () {
        const accessToken = liff.getAccessToken();
        document.getElementById('accesstokenfield').textContent = accessToken;
        toggleAccessToken();
    });

    // get profile call
    document.getElementById('getprofilebutton').addEventListener('click', function () {
        liff.getProfile().then(function (profile) {
            document.getElementById('useridprofilefield').textContent = profile.userId;
            document.getElementById('displaynamefield').textContent = profile.displayName;

            const profilePictureDiv = document.getElementById('profilepicturediv');
            if (profilePictureDiv.firstElementChild) {
                profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
            }
            const img = document.createElement('img');
            img.src = profile.pictureUrl;
            img.alt = "Profile Picture";
            profilePictureDiv.appendChild(img);

            document.getElementById('statusmessagefield').textContent = profile.statusMessage;
            toggleProfileData();
        }).catch(function (error) {
            window.alert("Error getting profile: " + error);
        });
    });
}

function toggleAccessToken() {
    toggleElement('accesstokendata');
}

function toggleProfileData() {
    toggleElement('profileinfo');
}

function toggleElement(elementId) {
    const elem = document.getElementById(elementId);
    if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {
        elem.style.display = "none";
    } else {
        elem.style.display = "block";
    }
}