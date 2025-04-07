// Test file to verify wp.customize.preview.bind works with multiple arguments

// This should now work without TypeScript errors
window.wp.customize?.preview.bind("pro_notice", function (action: string) {
    if (action === "show") {
        // Do something 
        console.log("Showing pro notice");
    } else {
        // Do another thing 
        console.log("Hiding pro notice");
    }
});

// Test with more complex callback
window.wp.customize?.preview.bind("complex_event", function (data: any, moreData: any) {
    console.log("Received data:", data, moreData);
});
