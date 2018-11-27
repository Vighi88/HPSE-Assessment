package com.hpse.assessment.server.model;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Request_Details")
public class Requests implements Serializable {
	
/*	public List<MatrixInput> getMatrixInput() {
		return matrixInput;
	}

	public void setMatrixInput(List<MatrixInput> matrixInput) {
		this.matrixInput = matrixInput;
	}*/

	@Id
	private String 	requestDetailsId;

	private String requestSubmissionDate;
	
	private Long  noOfCities;
	
	private Long  originCity;
	
	private double[][] matrix;
	
	private String shortestPath;
	
	public String getRequestSubmissionDate() {
		return requestSubmissionDate;
	}

	public void setRequestSubmissionDate(String requestSubmissionDate) {
		this.requestSubmissionDate = requestSubmissionDate;
	}

	public Long getNoOfCities() {
		return noOfCities;
	}

	public void setNoOfCities(Long noOfCities) {
		this.noOfCities = noOfCities;
	}

	public String getRequestDetailsId() {
		return requestDetailsId;
	}

	public void setRequestDetailsId(String requestDetailsId) {
		this.requestDetailsId = requestDetailsId;
	}

	public Long getOriginCity() {
		return originCity;
	}

	public void setOriginCity(Long originCity) {
		this.originCity = originCity;
	}

	public double[][] getMatrix() {
		return matrix;
	}

	public void setMatrix(double[][] matrix) {
		this.matrix = matrix;
	}

	public String getShortestPath() {
		return shortestPath;
	}

	public void setShortestPath(String shortestPath) {
		this.shortestPath = shortestPath;
	}
	
}
