/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getCompliancePolicyNonComplianceReportPostRequestBody
 */
export function createGetCompliancePolicyNonComplianceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetCompliancePolicyNonComplianceReportPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetCompliancePolicyNonComplianceReportPostRequestBody(getCompliancePolicyNonComplianceReportPostRequestBody: Partial<GetCompliancePolicyNonComplianceReportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getCompliancePolicyNonComplianceReportPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getCompliancePolicyNonComplianceReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getCompliancePolicyNonComplianceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getCompliancePolicyNonComplianceReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getCompliancePolicyNonComplianceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getCompliancePolicyNonComplianceReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getCompliancePolicyNonComplianceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getCompliancePolicyNonComplianceReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getCompliancePolicyNonComplianceReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getCompliancePolicyNonComplianceReportPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetCompliancePolicyNonComplianceReportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The filter property
     */
    filter?: string;
    /**
     * The groupBy property
     */
    groupBy?: string[];
    /**
     * The name property
     */
    name?: string;
    /**
     * The orderBy property
     */
    orderBy?: string[];
    /**
     * The search property
     */
    search?: string;
    /**
     * The select property
     */
    select?: string[];
    /**
     * The sessionId property
     */
    sessionId?: string;
    /**
     * The skip property
     */
    skip?: number;
    /**
     * The top property
     */
    top?: number;
}
/**
 * Provides operations to call the getCompliancePolicyNonComplianceReport method.
 */
export interface GetCompliancePolicyNonComplianceReportRequestBuilder extends BaseRequestBuilder<GetCompliancePolicyNonComplianceReportRequestBuilder> {
    /**
     * Invoke action getCompliancePolicyNonComplianceReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
     post(body: GetCompliancePolicyNonComplianceReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Invoke action getCompliancePolicyNonComplianceReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: GetCompliancePolicyNonComplianceReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetCompliancePolicyNonComplianceReportPostRequestBody(writer: SerializationWriter, getCompliancePolicyNonComplianceReportPostRequestBody: Partial<GetCompliancePolicyNonComplianceReportPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("filter", getCompliancePolicyNonComplianceReportPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getCompliancePolicyNonComplianceReportPostRequestBody.groupBy);
    writer.writeStringValue("name", getCompliancePolicyNonComplianceReportPostRequestBody.name);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getCompliancePolicyNonComplianceReportPostRequestBody.orderBy);
    writer.writeStringValue("search", getCompliancePolicyNonComplianceReportPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getCompliancePolicyNonComplianceReportPostRequestBody.select);
    writer.writeStringValue("sessionId", getCompliancePolicyNonComplianceReportPostRequestBody.sessionId);
    writer.writeNumberValue("skip", getCompliancePolicyNonComplianceReportPostRequestBody.skip);
    writer.writeNumberValue("top", getCompliancePolicyNonComplianceReportPostRequestBody.top);
    writer.writeAdditionalData(getCompliancePolicyNonComplianceReportPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const GetCompliancePolicyNonComplianceReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetCompliancePolicyNonComplianceReportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const GetCompliancePolicyNonComplianceReportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/getCompliancePolicyNonComplianceReport";
/* tslint:enable */
/* eslint-enable */