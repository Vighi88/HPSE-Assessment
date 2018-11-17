package com.hpse.assessment.server.model;

import java.io.Serializable;
import java.util.Date;
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

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "REQUEST_DETAILS")
public class Requests implements Serializable {
	
	public List<MatrixInput> getMatrixInput() {
		return matrixInput;
	}

	public void setMatrixInput(List<MatrixInput> matrixInput) {
		this.matrixInput = matrixInput;
	}

	@Id
	@GenericGenerator(name="SequenceFetcher", strategy="com.hpse.assessment.server.model.SequenceFetcher")
	@GeneratedValue(generator="SequenceFetcher")
	@Column(name = "REQUESTDETAILSID")
	private String 	requestDetailsId;

	@Column(name = "REQUESTDETAILSDATE")
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="MM/dd/yyyy")
	private Date requestSubmissionDate;
	
	@Column(name = "NUMBEROFCITIES")
	private String  noOfCities;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="MATRIXDETAILSID", referencedColumnName="REQUESTDETAILSID")
	private List<MatrixInput> matrixInput;
	
	public Date getRequestSubmissionDate() {
		return requestSubmissionDate;
	}

	public void setRequestSubmissionDate(Date requestSubmissionDate) {
		this.requestSubmissionDate = requestSubmissionDate;
	}

	public String getNoOfCities() {
		return noOfCities;
	}

	public void setNoOfCities(String noOfCities) {
		this.noOfCities = noOfCities;
	}

	public String getRequestDetailsId() {
		return requestDetailsId;
	}

	public void setRequestDetailsId(String requestDetailsId) {
		this.requestDetailsId = requestDetailsId;
	}


}
