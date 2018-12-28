$(document).on("pagecreate","#pagehome",function(){
    const baseWidth = 320;
    const baseHeight = 568;
    const thisWidth = window.innerWidth;
    const thisHeight = window.innerHeight;
    console.log(thisWidth);
    console.log(thisHeight);

    var pagehome = document.getElementById('pagehome');
    
    var main = document.createElement('div');
    main.className = 'ui-content yingmai-background';
    main.setAttribute('data-role','main');

    var icon = document.createElement('img');
    icon.src = 'image/icon.jpg';
    icon.className = 'yingmai-icon';
    icon.width = 30 / baseWidth * thisWidth;
    icon.height = 30 / baseWidth * thisWidth;
    icon.style.float = 'left'
    icon.style.position = 'relative';
    icon.style.left = '-' + String(2 / baseWidth * thisWidth) + 'px';

    var shareDiv = document.createElement('div');
    shareDiv.className = 'yingmai-div1';
    shareDiv.style.float = 'left';
    shareDiv.style.width = String(158/baseWidth*thisWidth) + 'px';
    shareDiv.style.height = String(30/baseWidth*thisWidth) + 'px';
    shareDiv.style.position = 'relative';
    shareDiv.style.left = String(23 / baseWidth * thisWidth) + 'px';

    var shareIcon = document.createElement('img');
    shareIcon.src = 'image/hdpi/½ð¶î.png';
    shareIcon.width = 16 / baseWidth * thisWidth;
    shareIcon.height = 16 / baseWidth * thisWidth;
    shareIcon.style.float = 'left';
    shareIcon.style.position = 'relative';
    shareIcon.style.left = String(11 / baseWidth * thisWidth) + 'px';
    shareIcon.style.top = String(8 / baseWidth * thisWidth) + 'px';

    var shareText = document.createElement('p');
    shareText.innerText = 'ÑûÇë¶î';
    shareText.className = 'yingmai-font1';
    shareText.style.float = 'left';
    shareText.style.position = 'relative';
    shareText.style.left = String(26 / baseWidth * thisWidth) + 'px';
    shareText.style.bottom = String(4 / baseWidth * thisWidth) + 'px';

    var shareValue = document.createElement('p');
    shareValue.innerText = '1000CNY';
    shareValue.className = 'yingmai-font1';
    shareValue.style.float = 'left';
    shareValue.style.position = 'relative';
    shareValue.style.left = String(30 / baseWidth * thisWidth) + 'px';
    shareValue.style.bottom = String(4 / baseWidth * thisWidth) + 'px';

    var shareButton = document.createElement('div');
    shareButton.className = 'yingmai-button1';
    shareButton.style.width = String(60 / baseWidth * thisWidth) + 'px';
    shareButton.style.height = String(30 / baseWidth * thisWidth) + 'px';
    shareButton.style.float = 'left';
    shareButton.style.position = 'relative';
    shareButton.style.left = String(43 / baseWidth * thisWidth) + 'px';

    var shareButtonText = document.createElement('p');
    shareButtonText.innerText = 'ÑûÇë';
    shareButtonText.style.position = 'relative';
    shareButtonText.style.left = String(14 / baseWidth * thisWidth) + 'px';
    shareButtonText.style.bottom = String(8 / baseWidth * thisWidth) + 'px';

    var buttonGrop1 = document.createElement('div');
    buttonGrop1.setAttribute('data-role','controlgroup');
    buttonGrop1.setAttribute('data-type','horizontal');
    buttonGrop1.style.position = 'relative';
    buttonGrop1.style.top = String(27 / baseWidth * thisWidth) + 'px';

    var buyButton_50 = document.createElement('div');
    buyButton_50.className = 'yingmai-button2';
    buyButton_50.style.float = 'left';
    buyButton_50.style.position = 'relative';
    buyButton_50.style.left = String(5 / baseWidth * thisWidth) + 'px';

    var buyButton_50Text = document.createElement('p');
    buyButton_50Text.innerText = '50';
    buyButton_50Text.style.position = 'relative';
    buyButton_50Text.style.bottom = String(3 / baseWidth * thisWidth) + 'px';

    buyButton_50.append(buyButton_50Text);
    buttonGrop1.append(buyButton_50);

    var buyButton_100 = document.createElement('div');
    buyButton_100.className = 'yingmai-button2';
    buyButton_100.style.float = 'left';
    buyButton_100.style.position = 'relative';
    buyButton_100.style.left = String(53 / baseWidth * thisWidth) + 'px';

    var buyButton_100Text = document.createElement('p');
    buyButton_100Text.innerText = '100';
    buyButton_100Text.style.position = 'relative';
    buyButton_100Text.style.bottom = String(3 / baseWidth * thisWidth) + 'px';

    buyButton_100.append(buyButton_100Text);
    buttonGrop1.append(buyButton_100);

    var buyButton_300 = document.createElement('div');
    buyButton_300.className = 'yingmai-button2';
    buyButton_300.style.float = 'left';
    buyButton_300.style.position = 'relative';
    buyButton_300.style.left = String(101 / baseWidth * thisWidth) + 'px';

    var buyButton_300Text = document.createElement('p');
    buyButton_300Text.innerText = '300';
    buyButton_300Text.style.position = 'relative';
    buyButton_300Text.style.bottom = String(3 / baseWidth * thisWidth) + 'px';

    buyButton_300.append(buyButton_300Text);
    buttonGrop1.append(buyButton_300);



    var buttonGrop2 = document.createElement('div');
    buttonGrop2.setAttribute('data-role','controlgroup');
    buttonGrop2.setAttribute('data-type','horizontal');
    buttonGrop2.style.position = 'relative';
    buttonGrop2.style.top = String(27 / baseWidth * thisWidth) + 'px';

    var buyButton_500 = document.createElement('div');
    buyButton_500.className = 'yingmai-button2';
    buyButton_500.style.float = 'left';
    buyButton_500.style.position = 'relative';
    buyButton_500.style.left = String(5 / baseWidth * thisWidth) + 'px';

    var buyButton_500Text = document.createElement('p');
    buyButton_500Text.innerText = '500';
    buyButton_500Text.style.position = 'relative';
    buyButton_500Text.style.bottom = String(3 / baseWidth * thisWidth) + 'px';

    buyButton_500.append(buyButton_500Text);
    buttonGrop2.append(buyButton_500);

    var buyButton_800 = document.createElement('div');
    buyButton_800.className = 'yingmai-button2';
    buyButton_800.style.float = 'left';
    buyButton_800.style.position = 'relative';
    buyButton_800.style.left = String(53 / baseWidth * thisWidth) + 'px';

    var buyButton_800Text = document.createElement('p');
    buyButton_800Text.innerText = '100';
    buyButton_800Text.style.position = 'relative';
    buyButton_800Text.style.bottom = String(3 / baseWidth * thisWidth) + 'px';

    //buyButton_800.append(buyButton_800Text);
    //buttonGrop2.append(buyButton_800);

    var buyButton_1000 = document.createElement('div');
    buyButton_1000.className = 'yingmai-button2';
    buyButton_1000.style.float = 'left';
    buyButton_1000.style.position = 'relative';
    buyButton_1000.style.left = String(101 / baseWidth * thisWidth) + 'px';

    var buyButton_1000Text = document.createElement('p');
    buyButton_1000Text.innerText = '300';
    buyButton_1000Text.style.position = 'relative';
    buyButton_1000Text.style.bottom = String(3 / baseWidth * thisWidth) + 'px';

    //buyButton_1000.append(buyButton_1000Text);
    //buttonGrop2.append(buyButton_1000);

    shareDiv.append(shareIcon);
    shareDiv.append(shareText);
    shareDiv.append(shareValue);

    shareButton.append(shareButtonText);

    main.append(icon);
    main.append(shareDiv);
    main.append(shareButton);
    main.append(buttonGrop1);
    main.append(buttonGrop2);
    
    pagehome.append(main);
});
