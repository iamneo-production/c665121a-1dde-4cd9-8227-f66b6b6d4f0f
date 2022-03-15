package config;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;

public class ExtentManager {

    private static ExtentReports extentReports = null;
    private static ExtentHtmlReporter htmlReporter;
    private ExtentManager() {
    }

    public static ExtentReports getInstance() {
        if (extentReports == null) {
            htmlReporter = new ExtentHtmlReporter(System.getProperty("user.dir") + AppConstants.REPORT_PATH);
            extentReports = new ExtentReports();
            extentReports.attachReporter(htmlReporter);

            htmlReporter.config().setDocumentTitle("Watch Shop Automation Report"); // Tittle of Report
            htmlReporter.config().setReportName("Watch Shop Functional Test Report"); // Name of the report
            htmlReporter.config().setTheme(Theme.DARK);//Default Theme of Report
            htmlReporter.config().setTimeStampFormat("EEEE, MMMM dd, yyyy, hh:mm a '('zzz')'");

            // General information releated to application
            extentReports.setSystemInfo("Application Name", "Watch Shop");
            extentReports.setSystemInfo("User Name", "Guttikonda Partha Sai");
            extentReports.setSystemInfo("Envirnoment", "QE");



        }

        return extentReports;
    }
}
