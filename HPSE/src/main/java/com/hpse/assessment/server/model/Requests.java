package com.hpse.assessment.server.model;

import java.io.Serializable;
import java.sql.Array;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "REQUEST_DETAILS")
public class Requests implements Serializable {
	
/*	public List<MatrixInput> getMatrixInput() {
		return matrixInput;
	}

	public void setMatrixInput(List<MatrixInput> matrixInput) {
		this.matrixInput = matrixInput;
	}*/

	@Id
	@GenericGenerator(name="SequenceFetcher", strategy="com.hpse.assessment.server.model.SequenceFetcher")
	@GeneratedValue(generator="SequenceFetcher")
	@Column(name = "REQUESTDETAILSID")
	private String 	requestDetailsId;

	@Column(name = "REQUESTDETAILSDATE")
	//@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="MM/dd/yyyy")
	private String requestSubmissionDate;
	
	@Column(name = "NUMBEROFCITIES")
	private Long  noOfCities;
	
	@Column(name = "ORIGINCITY")
	private Long  originCity;
	
	@Column(name = "MATRIX")
	private double[][] matrix;
	
	@Column(name = "SHORTESTPATH")
	private String shortestPath;
/*	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="REQUESTDETAILSID", referencedColumnName="REQUESTDETAILSID")
	@Column(name = "MatrixInput")
	private List<MatrixInput> matrixInput;*/
	
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
