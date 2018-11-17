package com.hpse.assessment.server.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "MATRIXINPUT")
public class MatrixInput implements Serializable {
	
	@Id
	@SequenceGenerator(name="SEQ_GEN", sequenceName="MATRIXINPUT_SEQ", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="SEQ_GEN")
	@Column(name = "MATRIXDETAILSID")
	private Long 	matrixInputId;
	
	@Column(name = "REQUESTDETAILSDATE")
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="MM/dd/yyyy")
	private Date requestSubmissionDate;
	
	public Long getMatrixInputId() {
		return matrixInputId;
	}

	public void setMatrixInputId(Long matrixInputId) {
		this.matrixInputId = matrixInputId;
	}
	
	
	public Date getRequestSubmissionDate() {
		return requestSubmissionDate;
	}


	public void setRequestSubmissionDate(Date requestSubmissionDate) {
		this.requestSubmissionDate = requestSubmissionDate;
	}
	
	
}

