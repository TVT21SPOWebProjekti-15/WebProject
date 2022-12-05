package com.project.webproject;

public class Info {
    String Year;
    String Anomaly;
    String Lower_confidence_limit;
    String Upper_confidence_limit;

    public Info() {
    }

    public Info(String Year, String Anomaly, String Lower_confidence_limit, String Upper_confidence_limit) {
        this.Year = Year;
        this.Anomaly = Anomaly;
        this.Lower_confidence_limit = Lower_confidence_limit;
        this.Upper_confidence_limit = Upper_confidence_limit;
    }

    public String getYear() {
        return this.Year;
    }

    public void setYear(String Year) {
        this.Year = Year;
    }

    public String getAnomaly() {
        return this.Anomaly;
    }

    public void setAnomaly(String Anomaly) {
        this.Anomaly = Anomaly;
    }

    public String getLower_confidence_limit() {
        return this.Lower_confidence_limit;
    }

    public void setLower_confidence_limit(String Lower_confidence_limit) {
        this.Lower_confidence_limit = Lower_confidence_limit;
    }

    public String getUpper_confidence_limit() {
        return this.Upper_confidence_limit;
    }

    public void setUpper_confidence_limit(String Upper_confidence_limit) {
        this.Upper_confidence_limit = Upper_confidence_limit;
    }
}
