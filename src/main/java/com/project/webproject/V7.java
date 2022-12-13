package com.project.webproject;

public class V7 {
    String time;
    String co2_ppm;

    public V7() {
    }

    public V7(String time, String co2_ppm) {
        this.time = time;
        this.co2_ppm = co2_ppm;
    }

    public String getTime() {
        return this.time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getCo2_ppm() {
        return this.co2_ppm;
    }

    public void setCo2_ppm(String co2_ppm) {
        this.co2_ppm = co2_ppm;
    }

}
