window.sentimentGauge;

window.getEmoji = function (val) {
    if (val <= 20) {
        return '🤬';
    } else if (val > 20 && val <= 50) {
        return '🙁';
    } else if (val > 50 && val <= 70) {
        return '😐';
    } else if (val > 70 && val <= 90) {
        return '😃';
    } else if (val > 90) {
        return '😍';
    }
}

window.JsFunctions = {
    initializeGauge: function (gaugeId, initialValue) {
        window.sentimentGauge = new JustGage({
            id: gaugeId,
            value: initialValue,
            min: 0,
            max: 100,
            decimals: 2,
            donut: true,
            symbol: '%',
            gaugeWidthScale: 0.3,
            title: "Sentiment Score",
            counter: true,
            hideInnerShadow: true,
            textRenderer: window.getEmoji,
            levelColors: [
                "#ff0000",
                "#f9c802",
                "#a9d70b"
            ]
        });
        return true;
    },
    updateGauge: function (val) {
        window.sentimentGauge.refresh(val);
        return true;
    }
};