import java.util.List;

public class DemoService {

    // SQL Injection Issue
    public String getUser(String username) {
        String query = "SELECT * FROM users WHERE username = '" + username + "'";
        return query;
    }

    // Performance Issue
    public String joinWords(List<String> words) {
        String result = "";
        for (String word : words) {
            result += word + " ";
        }
        return result.trim();
    }

    // Code Smell
    public boolean checkFlag(boolean flag) {
        if(flag == true){
            return true;
        } else {
            return false;
        }
    }
}
