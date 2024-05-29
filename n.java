@RestController
public class TaskController {

    @GetMapping("/tasks")
    public List<Task> getTasks() {
        // Manejo de solicitudes concurrentes a través de hilos del contenedor
        return taskService.getAllTasks();
    }
}
