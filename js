// Function to check if Ename is filled
function empename() {
    var ename = $v('P2_ENAME'); // Get the value of P2_ENAME
    if (!ename) { // Check if it is empty or null
        // Use apex.message.alert to show a default alert message
        apex.message.alert('Please enter a value for Ename before proceeding.', {
            title: "Required Field",
            icon: "warning"
        });
        return false; // Return false if validation fails
    }
    return true; // Return true if validation passes
}

// Add event listeners to specified fields to check Supplier Number
document.addEventListener('DOMContentLoaded', function() {
    var fieldsToCheck = [
        'P2_JOB'
        // Add other field IDs that need validation
    ];

    // Loop through each field and add a 'focus' event listener
    fieldsToCheck.forEach(function(fieldId) {
        var field = apex.item(fieldId).node;
        if (field) {
            field.addEventListener('focus', function() {
                if (!empename()) {
                    // Remove focus from the current field if validation fails
                    apex.item('P2_ENAME').setFocus();
                }
            });
        }
    });
});
