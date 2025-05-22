$(document).ready(function() {
    $("#addTask").click(function() {
        let taskText = $("#taskInput").val();
        if (taskText.trim() !== "") {
            $("#taskList").append(`
                <li>
                    <input type="checkbox" class="complete">
                    <span class="task">${taskText}</span>
                    <button class="delete">❌</button>
                </li>
            `);
            $("#taskInput").val(""); // Tyhjennä syöttökenttä
        }
    });

    $(document).on("change", ".complete", function() {
        $(this).siblings(".task").toggleClass("completed");
    });

    $(document).on("click", ".delete", function() {
        $(this).parent().remove();
    });
});
